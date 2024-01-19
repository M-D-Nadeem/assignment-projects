import express from "express"
import app from "./app.js"
import connect_db from "./db.js"
connect_db()
import dotenv from "dotenv"
dotenv.config()
const port=process.env.port
app.listen(port,()=>{
    console.log("Server started");
})
