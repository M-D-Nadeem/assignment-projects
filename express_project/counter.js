import express from "express";
const app=express();
let v=0
app.get("/",(req,res)=>{
   
    res.send(`counter:${value}`)
})
app.get("/inc",(req,res)=>{
    value=value+1
    res.send(`counter:${value}`)
})
app.get("/dec",(req,res)=>{
    value=value-1
    res.send(`counter:${value}`)
})
app.listen(3001,()=>{
    console.log("Server Started");
})