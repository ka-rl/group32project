const express = require('express')
const userRoutes = require('./routes/user')
const eventRoutes = require('./routes/event')

const app = express()

app.use('/api/user', userRoutes)
app.use('/api/event', eventRoutes)



app.listen(4000, () => {
    console.log('server started at http://localhost:4000')
})