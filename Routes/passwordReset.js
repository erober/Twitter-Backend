const express = require("express");
const router = express.Router();
const {newpassword, getpassword} = require('../Controllers/password')

router.get("/",(req,res)=>{
    getpassword(req,res)   
})

router.post("/",(req,res)=>{
    newpassword(req,res)    
})

module.exports=router