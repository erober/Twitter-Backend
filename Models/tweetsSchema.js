const mongoose =require('mongoose');

const tweets = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    tweets: {
        type: [String]
    }
})
var tweetsData =mongoose.model('tweetsData',tweets);
module.exports= tweetsData;