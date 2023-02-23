import "express-async-errors";
import express from "express";
import handleErrorMiddleware from "./middlewares/handleErros.middleware";
import cors from 'cors'

import { appRoutes } from "./routes";

const app = express()
app.use(cors())
app.use(express.json())

appRoutes(app);
app.use(handleErrorMiddleware)

export default app;