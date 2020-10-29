import express from "express";

import { weekly } from "../controllers/statisticsController";

const weeklyRouter = express.Router();

weeklyRouter.get('/', weekly);

export default weeklyRouter;