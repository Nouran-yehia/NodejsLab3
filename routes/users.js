const express = require ('express');
const router = express.Router();
const usersCon = require('../controllers/users_controller') 

router.get('/',(req, res)=>{
    usersCon.display(res)
})

router.post('/',(req, res)=>{
    usersCon.create(res, req)
})

router.get('/:id',(req, res)=>{
    const id = req.params.id
    usersCon.displayUser(id, res)
})

router.delete('/:id',(req, res)=>{
    const id = req.params.id
    usersCon.deletee(id, res)
})

module.exports= router;