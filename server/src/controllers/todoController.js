import Todo from "../models/ToDo.js";

// Create a todo
export const createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const todo = await Todo.create({
      title,
      description,
      owner: req.user._id,
    });

    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
};

// Get all todos for the logged-in user
export const getTodos = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const completed = req.query.completed;

    const filter = { owner: req.user._id };
    if (completed !== undefined) {
      filter.completed = completed === "true"; 
    }

    const skip = (page - 1) * limit;

    const todos = await Todo.find(filter)
      .sort({ createdAt: -1 }) 
      .skip(skip)
      .limit(limit);

    const total = await Todo.countDocuments(filter);

    res.json({
      total,
      page,
      limit,
      todos,
    });
  } catch (err) {
    next(err);
  }
};

// Get single todo
export const getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    if (!todo.owner.equals(req.user._id))
      return res.status(403).json({ message: "Forbidden" });

    res.json(todo);
  } catch (err) {
    next(err);
  }
};

// Update todo
export const updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    if (!todo.owner.equals(req.user._id))
      return res.status(403).json({ message: "Forbidden" });

    const allowed = ["title", "description", "completed"];
    allowed.forEach((key) => {
      if (req.body[key] !== undefined) todo[key] = req.body[key];
    });

    await todo.save();
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

// Delete todo
export const deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    if (!todo.owner.equals(req.user._id))
      return res.status(403).json({ message: "Forbidden" });

    await todo.deleteOne();
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};
