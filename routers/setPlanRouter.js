import express from "express";

import { setPlan } from "../controllers/statisticsController";

const setPlanRouter = express.Router();

setPlanRouter.get('/', setPlan);

export default setPlanRouter;
