To run the application on the local server clone it first and then run these commands

npm install

npm start

Add the username and password to the MongoDB connection in the index.js file.

You are good to go. You can use Postman to query the endpoints.

For New User Registration: post request based on user Schema

http://localhost:Port/userReg

For Existing User Info: get request with username

http://localhost:Port/userReg

For Password Reset: post request based on user Schema

http://localhost:Port/passwordReset

For Current Password Info: get request with username

http://localhost:Port/passwordReset

For New Tweet: post request based on tweets Schema

http://localhost:Port/tweets

For tweets by a user Info: get request with username

http://localhost:Port/tweets

For Current Followers Info: get request with username

http://localhost:Port/follow

For New Follow Request: post request with 2 usernames. username1 - person to be followed. username2- person requesting to follow username1 

http://localhost:Port/follow

For Unfollow Request: post request with 2 usernames. username1 - person to be unfollowed. username2- person requesting to unfollow username1 

http://localhost:Port/follow/unfollow






