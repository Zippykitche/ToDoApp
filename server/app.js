import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/auth.routes.js";
import todoRoutes from "./src/routes/todo.routes.js";
import errorHandler from "./src/middleware/errorHandler.js";
import morgan from "morgan";


const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);


app.get("/", (req, res) => res.json({ message: "Todo API" }));


app.use(errorHandler);


export default app;