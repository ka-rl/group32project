const express = require('express')
//controller functions
const { searchVolunteerHistory } = require('../controllers/historyController')

const router = express.Router()

router.post('/history', searchVolunteerHistory)

module.exports = router