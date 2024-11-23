const express = require('express');
const { searchVolunteerHistory } = require('../controllers/historyController');
const router = express.Router();

router.post('/searchVolunteerHistory', searchVolunteerHistory);

module.exports = router;
