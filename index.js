const express = require('express')
const helmet = require('helmet')

const parser=require('body-parser');
const mongoose= require('mongoose');
require("dotenv").config()

// Initialize the app
const app = express();

// Import mongodb credentials and connect to mongodb atlas database
const  user = process.env.mongoDBuser
const pass = process.env.mongoDbpass
mongoose.connect("mongodb+srv://cluster0.qlr2voe.mongodb.net/test?retryWrites=true&w=majority", { user: user, pass: pass, useNewUrlParser: true, useUnifiedTopology: true })

app.use(helmet())
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    next();    
});

app.get('/',(req,res)=>{
    res.json("Welcome to twitter")
})

const tweets = require('./Routes/tweets')
app.use('/tweets',tweets)

const userReg = require('./Routes/userReg')
app.use('/userReg',userReg)

const follow = require('./Routes/follow')
app.use('/follow',follow)

const passwordReset = require('./Routes/passwordReset')
app.use('/passwordReset',passwordReset)

// Setup server port
var port = process.env.PORT || 8000;

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Twitter on port " + port);
});