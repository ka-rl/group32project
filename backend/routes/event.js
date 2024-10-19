const express = require('express')
//controller functions
const { createEvent } = require('../controllers/eventController')




const router = express.Router()

//login route
//will execute loginUser when a post request sent to /login
router.post('/event', createEvent)

module.exports = router