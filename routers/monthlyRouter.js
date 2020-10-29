import express from "express";

import { monthly } from "../controllers/statisticsController";

const monthlyRouter = express.Router();

monthlyRouter.get('/', monthly);

export default monthlyRouter;