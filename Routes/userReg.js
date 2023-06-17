const express = require("express");
const router = express.Router();
const {newUser, getUser } = require('../Controllers/userReg')

router.get("/",(req,res)=>{
    getUser(req,res)   
})

router.post("/",(req,res)=>{
    newUser(req,res)    
})

module.exports=router