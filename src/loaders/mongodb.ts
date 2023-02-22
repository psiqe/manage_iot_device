import mongoose from "mongoose";
import 'dotenv/config';

const pwd = process.env.mongo_pwd
const mongo_pwd = encodeURIComponent(pwd || '')

mongoose.set('strictQuery', false); // Desativa a verificação estrita de consulta
async function startMongoDB() {
    await mongoose.connect(`mongodb+srv://mmigu:${mongo_pwd}@cluster0.stwbsmm.mongodb.net/manage_device`);
    
};

export default startMongoDB;