const express = require('express')
const app = express()

const index = require('./routes/index')
const posts = require('./routes/teachers')
const users = require('./routes/users')

app.use('/', index)
app.use('/users', users)
app.use('/teachers', posts)
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`starting on port ${PORT}`);
})