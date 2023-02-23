import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appErrors";
// import { CastError } from "mongoose";

const handleErrorMiddleware = async(error: Error, req:Request, res: Response, next: NextFunction)=>{
  console.log(error.name)
  console.log(error)
  if(error instanceof AppError){
    return res.status(error.statusCode).json({
      message: error.message,
    })
  }else if(error.name == "ValidationError" || error.name == "CastError"){
    return res.status(422).json({
      message: error.message
    })
  }

  return res.status(500).json({
    Error: error.message,
    message: 'Internal server error'
  })
};

export default handleErrorMiddleware;