const express = require('express')
//controller functions
const { createEvent } = require('../controllers/eventController')




const router = express.Router()


router.post('/create', createEvent)

module.exports = router