const express = require('express')
const mongoose = require('mongoose')

// Import  model
const userRegData = require('../Models/userSchema');

let newUser = (req, res)=> {
    userRegData.find({username: req.body.username })
    .exec()
    .then(user=>{
        if(user.length==0){
            const newUser= new userRegData()
            newUser.username = req.body.username 
            newUser.name = req.body.name 
            newUser.email = req.body.email 
            newUser.password = req.body.password 
            newUser.mobileNo = req.body.mobileNo 
            newUser.following = [] 
            newUser.follower = []

            newUser.save()
            res.send("welcome aboard") 
        }
        else{
            res.send("username exists")
        }
    })
}

let getUser = (req, res)=> {
    userRegData.find({username: req.body.username })
    .exec()
    .then(user=>{
        if(user.length>0){
            res.send(user[0]) 
        }
        else{
            res.send("No such username exists")
        }
    })
}


module.exports = {newUser, getUser}