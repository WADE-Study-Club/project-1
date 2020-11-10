import express from "express";

import { dailyPage, postDailyPage } from "../controllers/statisticsController";

const dailyPageRouter = express.Router();

dailyPageRouter.get('/', dailyPage);
dailyPageRouter.post('/', postDailyPage)
export default dailyPageRouter;