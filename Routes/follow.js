const express = require("express");
const router = express.Router();
const {newFollow, getFollowers, unFollow } = require('../Controllers/follow')

router.get("/",(req,res)=>{
    getFollowers(req,res)   
})

router.post("/",(req,res)=>{
    newFollow(req,res)    
})

router.post("/unfollow",(req,res)=>{
    unFollow(req,res)    
})


module.exports=router