import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const connect_db=async()=>{
    mongoose.connect(process.env.db_string)
    .then((con)=>{
        console.log("Databas connected: ",con.connection.host);
    })
    .catch((err)=>{
        throw new Error("Database not connected")
        process.exit(1)
    })
}
export default connect_db