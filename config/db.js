import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectdb = async()=>{
    try{
        const conn = mongoose.connect(process.env.mongodb);
        console.log("mongodb connected");

    }catch(error){
        console.log("error connecting to db");
        process.exit(1);
    }

};