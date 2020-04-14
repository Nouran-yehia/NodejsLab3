const express = require('express')
const userModel = require ('../models/user');
const bcrypt = require('bcrypt')
const router = express.Router();


router.get('/',(req,res,next)=>{
    userModel.find({ }, (err, users)=>{
        if(err) next('cannot find users');
        res.json(users)
    })
})


router.get('/:id',(req,res,next)=>{
    userModel.findById(req.params.id, (err, users)=>{
        if(err) next('cannot find user');
        res.json(users)

})

})

//add user
router.post('/',(req, res,next) => {
    const { body: { firstName,lastName, email , password} } = req;
    const user = new userModel({
        firstName,
        lastName,
        email,
        password
    })

    user.save((err, user)=>{
        if(err) next('invalid data'+err);
        res.json(user)
    })
})

//update user data
router.patch('/:id',async (req,res,next)=>{  
    req.body.password = await bcrypt.hash(req.body.password, 5)
    userModel.findByIdAndUpdate(req.params.id,req.body,
    {new: true}
    ,(err,user)=>{
        if(err) next('cannot update user');
        res.json(user)
    })
})

router.delete('/:id',(req,res,next)=>{
    userModel.findByIdAndRemove(req.params.id, (err)=>{
        if(err) next('cannot find user');
        res.send('success')

})})

router.get('/:id/posts',(req,res,next)=>{
    postModel.find({}).populate('auther','firstName lastName').where('auther').equals(req.params.id)
    .exec((err, users)=>{
        if(err) next('cannot get posts');
        res.json(users)
    })
})

module.exports = router