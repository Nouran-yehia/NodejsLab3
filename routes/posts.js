const express = require('express')
const postModel = require ('../models/post');


const router = express.Router();

//list posts
router.get('/',(req,res,next)=>{
    postModel.find({ }).populate( 'auther','firstName lastName').exec((err, post)=>{
        if(err) next('cannot find post');
        res.json(post)

    })
})

router.get('/:id',(req,res,next)=>{
    postModel.findById(req.params.id).populate( 'auther','firstName lastName').exec((err, post)=>{
        if(err) next('cannot find post');
        res.json(post)

    })
})





//add post
router.post('/',(req,res,next)=>{
    const { body: { title, body , auther } } = req;
    const user = new postModel({
        title,
        body,
        auther
    })

    user.save((err, post)=>{
        if(err) next('invalid data');
        res.json(post)
    })
})





router.patch('/:id',(req,res,next)=>{
    const { body: { title, body } } = req; 
    postModel.findByIdAndUpdate(req.params.id,{
        title,
        body
    } ,
    {new: true}
    ,(err,post)=>{
        if(err) next('cannot update post');
        res.json(post)
    })
})



router.delete('/:id',(req,res,next)=>{
    postModel.findByIdAndRemove(req.params.id, (err)=>{
        if(err) next('cannot find post');
        res.send('success')})
    })
    
module.exports = router;