const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema
//wont let us save to DB unless these rules are followed
const eventSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    urgnecy: {
        type: String,
        //not required according to assignment 2
    },
    date: {
        type: Date,
        //not req according to assignment 2
    }
})

eventSchema.statics.host = async function(name, description, location, skills, urgency, date) {

    //validation
    if (!name || !description || !location || !skills){
        throw Error('Required field invalid')
    }

    const event = await this.create({ name, description, location, skills, urgency, date })

    return event
}

module.exports = mongoose.model('Event', eventSchema)