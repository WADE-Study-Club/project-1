import express from "express";

import { todopage } from "../controllers/statisticsController";

const todopageRouter = express.Router();

todopageRouter.get('/', todopage);

export default todopageRouter;