const express = require('express')

const app = express()

app.get('/', (req, res)=>{ //request and response object is req and res
    res.json({mssg: 'welcome to the app'})
})

app.listen(4000, () => {
    console.log('server started at http://localhost:4000')
})