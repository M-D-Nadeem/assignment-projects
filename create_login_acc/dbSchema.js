import mongoose from "mongoose";
const User=new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"user name is required"],
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
})
export default mongoose.model("User",User)