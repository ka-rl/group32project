const History = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => { //id apart of the token payload
    jwt.sign({_id}, 'thisshouldbesecret') //sign the token

}

const searchVolunteerHistory = async (req, res) => {
    const { email } = req.body;

    try {
        const eventHistory = await History.searchVolunteerHistory(email)

        //create token
        const token = createToken(user._id)

        res.status(200).json({eventHistory})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = {searchVolunteerHistory}