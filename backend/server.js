const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/user', userRoutes)

app.listen(3000, () => {
    console.log('server started at http://localhost:5173')
})