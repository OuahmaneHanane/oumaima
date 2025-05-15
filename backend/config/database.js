import mongoose from "mongoose";
import dotenv from "dotenv";
// import {connectDb} from "./config/database.js"

dotenv.config();
const mongodbURl = process.env.MONGODB_URL

export const connectDb = async () =>{
    try{
        await mongoose.connect(mongodbURl)
        console.log('your database is connect successfully')
    } catch(error){
        console.error(error.message);
        
    }
}