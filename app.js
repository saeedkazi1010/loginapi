const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/UserDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
});

app.use(express.json())

const user1Router = require('./routes/user')
app.use('/user' ,user1Router)

app.listen(5000, () => {
    console.log('Server started')
}) 