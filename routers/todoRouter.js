import express from "express";

import { getTodos, postTodos } from "../controllers/statisticsController";

const todoRouter = express.Router();

todoRouter.get('/', getTodos);
todoRouter.post('/', postTodos);

export default todoRouter;