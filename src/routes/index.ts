import { Express } from "express";
import { DeviceRoutes } from "./device.routes";

export const appRoutes = (app: Express) => {
    app.use("/", DeviceRoutes());
};