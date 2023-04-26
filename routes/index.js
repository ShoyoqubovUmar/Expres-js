const {Router} = require('express')

const route = Router()

route.get('/',(req,res)=>{
    res.json({
        title:'main page',
        message:'hello express'
    })
})

module.exports = route