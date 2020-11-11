import express from "express";

import { todopage, createTodo } from "../controllers/statisticsController";

const todopageRouter = express.Router();

todopageRouter.get('/', todopage);
todopageRouter.post('/', createTodo);

export default todopageRouter;