const {Router} = require('express')
const route = Router()

route.get('/',(req,res)=>{
    res.json({
        title:'main page',
        message:'All users',
        data:[null]
    })
})
route.get('/:id',(req,res)=>{
    res.json({
        title:'main page',
        message:'All users',
        id:req.params.id,
        data:null
    })
})
route.delete('/:id',(req,res)=>{
    res.json({
        title:'main page',
        message:'User deleted',
        id:req.params.id,
        data:null
    })
})
route.put('/:id',(req,res)=>{
    res.json({
        title:'main page',
        message:'User updated',
        id:req.params.id,
        data:null
    })
})
route.post('/:id',(req,res)=>{
    res.json({
        title:'main page',
        message:'User added',
        id:req.params.id,
        data:null
    })
})





module.exports = route
