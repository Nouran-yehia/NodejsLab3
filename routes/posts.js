const express = require ('express');
const postsCon = require('../controllers/posts_controller') 
const router = express.Router();

router.get('/',(req, res)=>{
    postsCon.display()
})

router.post('/',(req, res)=>{
 postsCon.create(res, req)
})

router.get('/:id',(req, res)=>{
   const id = req.params.id
    postCon.displayUser(id, res)
})

router.put('/:id',(req, res)=>{
    const id = req.params.id
    postsCon.edit(req, res)
})

router.delete('/:id',(req, res)=>{
    const id = req.params.id
    postCon.deletee(id, res)})

module.exports= router;