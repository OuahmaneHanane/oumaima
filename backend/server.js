import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./config/database.js"

dotenv.config();

const app = express();
const port = process.env.PORT;


app.listen(port, ()=>{
    connectDb(),
    console.log(`your app is running on port ${port}`);
})


app.get("/", (req,res)=>{
    res.send("Hello!")
})