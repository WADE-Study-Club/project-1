import express from "express";

import { dairy } from "../controllers/statisticsController";

const dairyRouter = express.Router();

dairyRouter.get('/', dairy)

export default dairyRouter;