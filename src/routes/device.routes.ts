import { Router } from "express";
// import DeviceController from "../controllers/device.controllers";
const DeviceController = require('../controllers/device.controllers')

const routes = Router()

export const DeviceRoutes = () => {
    
    routes.post('/devices', DeviceController.created)
    routes.get('/devices', DeviceController.listedAll);
    routes.get('/devices/:id', DeviceController.listedOne);
    routes.patch('/devices/:id', DeviceController.updated)
    routes.delete('/devices/:id', DeviceController.deleted)

    return routes
}