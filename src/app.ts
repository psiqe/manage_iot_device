import express from "express";
import "express-async-errors";

import { appRoutes } from "./routes";
import handleErrorMiddleware from "./middlewares/handleErros.middleware";

import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../swagger.json'



const app = express()
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

appRoutes(app);
app.use(handleErrorMiddleware)

export default app;