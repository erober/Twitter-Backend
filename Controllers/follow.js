const express = require('express')

// Import  model
const userRegData = require('../Models/userSchema');

// username1 is one to followed, username2 is the person requesting to follow username1

let newFollow = (req, res)=> {
    userRegData.find({username: req.body.username1 })
    .exec()
    .then(userToBeFollowed=>{
        if(userToBeFollowed.length>0){            
            userRegData.find({username: req.body.username2 })
            .exec()
            .then(userFollowing=>{
                if(userFollowing.length>0){
                    const index1 = userToBeFollowed[0].follower.indexOf(req.body.username2)
                    if (index1 > -1) {
                       res.send("Already following")
                    }
                    else{
                        userToBeFollowed[0].follower.push(req.body.username2)
                        userFollowing[0].following.push(req.body.username1)
                        userToBeFollowed[0].save()
                        userFollowing[0].save()
                        res.send("Followed")
                    }                   
                }
                else{
                    res.send("The username requesting to follow doesn't exists")
                }
            })            
        }
        else{
            res.send("Follow request denied. Person to be followed doesn't exists")
        }
    })
}

let unFollow = (req, res)=> {
    userRegData.find({username: req.body.username1 })
    .exec()
    .then(userToBeUnFollowed=>{
        if(userToBeUnFollowed.length>0){            
            userRegData.find({username: req.body.username2 })
            .exec()
            .then(userUnFollowing=>{
                if(userUnFollowing.length>0){                  
                    const index1 = userToBeUnFollowed[0].follower.indexOf(req.body.username2)
                    if (index1 > -1) {
                        userToBeUnFollowed[0].follower.splice(index1, 1)
                    }
                    const index2 = userUnFollowing[0].following.indexOf(req.body.username1)
                    if (index2 > -1) {
                        userUnFollowing[0].following.splice(index2, 1)
                    }
                    userToBeUnFollowed[0].save()
                    userUnFollowing[0].save()
                    res.send("Unfollowed")              
                }
                else{
                    res.send("The username requesting to follow doesn't exists")
                }
            })            
        }
        else{
            res.send("Unfollow request denied. Person to be unfollowed doesn't exists")
        }
    })
}

let getFollowers = (req, res)=> {
    userRegData.find({username: req.body.username })
    .exec()
    .then(user=>{
        if(user.length>0){
            res.send(user[0].followers) 
        }
        else{
            res.send("No such username exists")
        }
    })
}


module.exports = {newFollow, getFollowers, unFollow}