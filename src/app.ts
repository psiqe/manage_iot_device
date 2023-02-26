import "express-async-errors";
import express from "express";
import handleErrorMiddleware from "./middlewares/handleErros.middleware";
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../swagger.json'


import { appRoutes } from "./routes";

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

appRoutes(app);
app.use(handleErrorMiddleware)

export default app;