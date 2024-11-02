const Events = require('../models/eventModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => { //id apart of the token payload
    jwt.sign({_id}, 'thisshouldbesecret') //sign the token

}
//create event
const createEvent = async (req, res) => {
    const {name, description, location, skills, urgency, date} = req.body

    try {
        const event = await Events.host(name, description, location, skills, urgency, date)

        //create token
        const token = createToken(event._id)

        res.status(200).json({name, description, location, skills, urgency, date, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    //res is the response object
    res.json({mssg: 'eventlogin'})
}

module.exports = {createEvent}