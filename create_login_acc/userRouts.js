import express from "express";
import exp from "./userController.js"
const router=express.Router()
router.post("/register",exp.register)
router.get("/login",exp.login)
export default router