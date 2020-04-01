const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const express = require (`express`);
const app = express();
app.use(bodyParser.json()); 
const usersR = require('./routes/users');
const postsR = require('./routes/posts');



app.use('/users',usersR);
app.use('/posts',postsR);
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

function connMong(error){
    if(error){
        console.log("Failed to connect to MongoDB Database!")
    }else{
        console.log("Connected to MongoDB Database")
    }
}

mongoose.connect('mongodb://localhost:27017/blog',
{
//    reconnectInterval : 10000,
//    reconnectTries: Number.MAX_VALUE,
   useUnifiedTopology: true,
   useNewUrlParser: true
}, (err)=> connMong(err))

app.get('/', function (req, res) {
    res.send('Welcome to our home page :)')
  })


console.log("listening to port 5000 \n http://localhost:5000/")

app.listen(5000)