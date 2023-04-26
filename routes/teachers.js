const {Router} = require('express')
const route = Router()


route.get('/',(req,res)=>{
    res.json({
        title:'main page',
        message:'All teachers',
        data:['qwe','lol','loller']
    })
})
route.get('/:id',(req,res)=>{
    res.json({
        title:'main page',
        message:'teacher',
        id:req.params.id,
        data:['qwe']
    })
})
route.delete('/:id',(req,res)=>{
    res.json({
        title:'main page',
        message:'teachers deleted',
        id:req.params.id,
        messageLol:'deleted'
    })
})
route.put('/:id',(req,res)=>{
    res.json({
        title:'main page',
        message:'teachers updated',
        id:req.params.id,
        messageLol:'edit',
        data:[{
            firstName:'kmdir',
            lastName:'kmmdir',
            email:'kmmdir@gmail.com',
            phone:'necdr',
            password:'nmadr'
        }]
    })
})
route.post('/:id',(req,res)=>{
    res.json({
        title:'main page',
        message:'teachers added',
        id:req.params.id,
        data:[{
            firstName:'kmdir',
            lastName:'kmmdir',
            email:'kmmdir@gmail.com',
            phone:'necdr',
            password:'nmadr'
        }]
    })
})

module.exports = route
