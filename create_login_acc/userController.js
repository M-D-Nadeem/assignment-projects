
import User from "./dbSchema.js"
let register=async(req,res)=>{
    try{
        const {userName,email,password}=req.body
        if(!userName || !email || !password){
            res.status(404).json({sucess:false,message:"UserName,Email, and password is needed"})
            throw new Error("UserName,Email, and password is needed")
        }
        const findname=await User.findOne({userName})
        const findemail=await User.findOne({email})
        if(findname || findemail){
            if(findname.userName===userName || findemail.email===email){
                res.status(500).json({sucess:false,message:"User already exist"})
                throw new Error("User already exist")
            }
        }
        const user=await User.create({
            userName,
            email,
            password
        })
        res.status(200).json({sucess:true,message:"User registerd",user})
    }
    catch(err){
        console.log("ERROR: ",err);
        res.status(500).json({sucess:false,message:err.message})
    }
}
let login=async(req,res)=>{
    try{
    const {userName,email,password}=req.body
    const finduser=await User.findOne({email})
    if(finduser){
        if(finduser.userName===userName && finduser.email===email && finduser.password===password){
            res.status(200).json({sucess:true,message:"Login Sucessfull"})
            console.log("Login Sucessfull");
        }
        else{
            res.status(500).json({sucess:false,message:"Login Unsucessfull"})
            throw new Error("Login unsucessfull")
        }
       }
    }
    catch(err){
        res.status(500).json({sucess:true,message:"Login Unsucessfull"})
    }
}
const exp={register,login}
export default exp