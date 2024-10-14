const USer = require('../models/userModel')

//login user
const loginUser = async (req, res) => {
    //res is the response object
    res.json({mssg: 'userlogin'})
}


//register user
const registerUser = async(req, res) => {}

module.exports = {loginUser, registerUser}