const express = require ('express');

const router = express.Router();

router.get('/',(req, res)=>{
    res.send('from get route')
})

router.patch('/:id',(req, res)=>{
    res.send(`from patch route /posts/${req.params.id}`)
})

router.post('/',(req, res)=>{
    res.send('from post route')
})

router.get('/:id',(req, res)=>{
    res.send(`from get route /posts/${req.params.id}`)
})

router.delete('/:id',(req, res)=>{
    res.send( `from delete route /posts/${req.params.id}`)
})

module.exports= router;