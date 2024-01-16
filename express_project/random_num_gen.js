import express from "express"
const app=express()
app.get("/random",(req,res)=>{
    res.send(`{random:${Math.random()*100}}`)
})
app.listen(3000,()=>{
    console.log("Server Started");
})