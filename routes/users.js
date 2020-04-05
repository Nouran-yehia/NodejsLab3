const express = require ('express');
const router = express.Router();
const usersCon = require('../controllers/users_controller') 

router.get('/',(req, res)=>{
    usersCon.display(req, res)
})

router.post('/',(req, res)=>{
    usersCon.create(req, res)
})

router.get('/:id',(req, res)=>{
    const id = req.params.id
    usersCon.displayUser(req, res)
})

router.put('/:id',(req, res)=>{
    const id = req.params.id
    usersCon.edit(req, res)
})

router.delete('/:id',(req, res)=>{
    usersCon.deletee(req, res)
})

module.exports= router;