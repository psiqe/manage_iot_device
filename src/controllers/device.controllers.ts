import { Request, Response } from "express";
import DeviceModel from "../models";

class DeviceController {
    async created(req:Request, res:Response): Promise<Response>{
        const createdDevice = await DeviceModel.create(req.body);

        return res.status(201).json(createdDevice)
    }
    
    async listedAll(req:Request, res:Response): Promise<Response>{
        const listedAllDevices = await DeviceModel.find();

        return res.status(201).json(listedAllDevices)
    }

    async listedOne(req:Request, res: Response): Promise<Response>{
        const { id } = req.params
        const listedOneDevice = await DeviceModel.findOne({"_id":id})
        if(!listedOneDevice){ return res.status(404).json({message: "Device not found!"}) }

        return res.status(200).json(listedOneDevice)
    }

    async updated(req:Request, res:Response): Promise<Response>{
        const { id } = req.params
        const listedOneDevice = await DeviceModel.findOne({"_id":id})
        if(!listedOneDevice){ return res.status(404).json({message: "Device not found!"}) }
        const updatedDevice = await DeviceModel.updateOne({"_id":id},  {$set: {...req.body}} )

        return res.status(201).json(updatedDevice)  
    }

    async deleted(req:Request, res:Response){
        const { id } = req.params
        const listedOneDevice = await DeviceModel.findOne({"_id":id})
        if(!listedOneDevice){ return res.status(404).json({message: "Device not found!"}) }
        const deletedDevice = await DeviceModel.deleteOne({"_id":id})

        return res.status(204).json(deletedDevice)  
    }
};

// export default DeviceController;
module.exports = new DeviceController();