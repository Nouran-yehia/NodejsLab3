const mongoose = require('mongoose');
const express = require ('express');
const app = express();
const usersR = require('./routes/users');
const postsR = require('./routes/posts');

app.use('/users',usersR);
app.use('/posts',postsR);

function connMong(error){
    if(error){
        console.log("Failed to connect to MongoDB Database!")
    }else{
        console.log("Connected to MongoDB Database")
    }
}

mongoose.connect('mongodb://localhost:27017/blog',
{
    useNewUrlParser : true,
    useUnifiedTopology: true
}, (err)=> connMong(err))

app.get('/', function (req, res) {
    res.send('Welcome to our home page :)')
  })

  

console.log("listening to port 5000 \n http://localhost:5000/")

app.listen(5000)