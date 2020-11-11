import express from "express";

import morgan from "morgan";

import helmet from "helmet";

import cookieParser from "cookie-parser";

import bodyParser from "body-parser";

import routes from "./routes";

import dairyRouter from "./routers/dairyRouter"
import weeklyRouter from "./routers/weeklyRouter"
import monthlyRouter from "./routers/monthlyRouter"
import todoRouter from "./routers/todoRouter"
import todopageRouter from "./routers/todopageRouter"


const app = express();

app.use(helmet());

app.set("view engine", "pug");

app.use("/static", express.static("static"));

app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(routes.month, monthlyRouter);

app.use(routes.week, weeklyRouter);

app.use('/', dairyRouter);

app.use(routes.todo, todoRouter);

app.use(routes.todopage, todopageRouter);

export default app;