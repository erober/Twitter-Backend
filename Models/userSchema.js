const mongoose =require('mongoose');

const userReg = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,  
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    mobileNo: {
        type: Number,
        required: true,      
    },
    following: {
        type: [String]
    },
    follower: {
        type: [String]
    }
})
var userRegData =mongoose.model('userRegData',userReg);
module.exports= userRegData;