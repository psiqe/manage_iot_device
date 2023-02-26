import mongoose from "mongoose";
import 'dotenv/config';


const pwd = process.env.mongo_pwd
const pwdDeploy = "Gn7AyuemFh0JCZfr"
const mongo_pwd = encodeURIComponent(pwdDeploy || '')

mongoose.set('strictQuery', false); // Desativa a verificação estrita de consulta
async function startMongoDB() {
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(`mongodb+srv://mmigu:${pwd}@cluster0.stwbsmm.mongodb.net/?retryWrites=true&w=majority`);
        return console.log("db connected!")
    } catch (error) {
        return console.log(`Error: ${error}`)
    }    
};

export default startMongoDB;