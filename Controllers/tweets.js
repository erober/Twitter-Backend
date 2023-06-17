const express = require('express')

// Import  model
const tweets = require('../Models/tweetsSchema');
const userRegData = require('../Models/userSchema');

let newTweet = (req, res)=> {
    userRegData.find({username: req.body.username })
    .exec()
    .then(user=>{
        if(user.length>0){
            tweets.find({username: req.body.username})
            .exec()
            .then(tweet =>{
                if(tweet.length >0){
                    tweet[0].tweets.push(req.body.tweet)
                    tweet[0].save()
                }
                else{
                    var newtweet = new tweets()
                    newtweet.username = req.body.username 
                    newtweet.tweets.push(req.body.tweet)   
                    newtweet.save()
                }               
            })
            res.send("tweeted") 
        }
        else{
            res.send("No such username exists")
        }
    })
}

let getTweets = (req, res)=> {
    tweets.find({username: req.body.username })
    .exec()
    .then(user=>{
        if(user.length>0){
            res.send(user[0].tweets) 
        }
        else{
            res.send("No such username exists")
        }
    })
}


module.exports = {newTweet, getTweets}