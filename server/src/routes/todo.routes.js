import express from "express";
import auth from "../middleware/auth.js";
import * as todoCtrl from "../controllers/todoController.js";


const router = express.Router();


router.use(auth);


router.post("/", todoCtrl.createTodo);
router.get("/", todoCtrl.getTodos);
router.get("/:id", todoCtrl.getTodo);
router.patch("/:id", todoCtrl.updateTodo);
router.delete("/:id", todoCtrl.deleteTodo);


export default router;