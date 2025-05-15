import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/database.js";
import bodyParser from "body-parser";
import usersRoutes from "../routes/users.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json()); // to parse JSON request bodies

app.use('/users',usersRoutes);

app.listen(port, ()=>{
    connectDb(),
    console.log(`your app is running on port ${port}`);
})


app.get("/", (req,res) =>{
    res.send("Hello from Homepage!")
})
