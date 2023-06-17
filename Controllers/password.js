const express = require('express')

// Import  model
const userRegData = require('../Models/userSchema');

let newpassword = (req, res)=> {
    userRegData.find({username: req.body.username })
    .exec()
    .then(user=>{
        if(user.length>0){
            user[0].password = req.body.password
            user[0].save()
            res.send("password reset done") 
        }
        else{
            res.send("username doesn't exists")
        }
    })
}

let getpassword = (req, res)=> {
    userRegData.find({username: req.body.username })
    .exec()
    .then(user=>{
        if(user.length>0){
            res.send(user[0].password) 
        }
        else{
            res.send("No such username exists")
        }
    })
}


module.exports = {newpassword, getpassword}