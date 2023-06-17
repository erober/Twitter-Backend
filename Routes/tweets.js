const express = require("express");
const router = express.Router();
const {newTweet, getTweets } = require('../Controllers/tweets')

router.get("/",(req,res)=>{
    getTweets(req,res)    
})

router.post("/",(req,res)=>{
    newTweet(req,res)   
})

module.exports=router