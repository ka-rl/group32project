const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => { //id apart of the token payload
    jwt.sign({_id}, 'thisshouldbesecret') //sign the token

}
//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    //res is the response object
    res.json({mssg: 'userlogin'})
}


//register user
const registerUser = async (req, res) => {


    const {email, password} = req.body

    try {
        const user = await User.register(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser, registerUser}