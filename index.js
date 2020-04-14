const express = require('express');
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const mongoose = require('mongoose');


const PORT = process.env.PORT || 4000
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use(express.json())
app.use(function log(req, res, next){
    console.log(new Date() , req.method , req.url);
    next();
} )


app.use('/user', userRouter)
app.use('/post', postRouter)

app.use((req,res,next)=>{
    if(res.status(404)){
    next('no such route, please try again')
    }
})


app.use((err, req, res, next)=>{
        res.send('some errors occur : \n' + err)
    
})


app.listen( PORT, (err)=>{
    console.log(`success ${PORT}`)
   
})

//connect db
mongoose.connect('mongodb://localhost:27017/blogSystem',{
    useNewUrlParser: true, useUnifiedTopology: true
}, (err)=>{
    if(!err) console.log("start mongodb connection")
    else console.log(err)
})

