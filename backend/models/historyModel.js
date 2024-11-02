const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema
//wont let us save to DB unless these rules are followed
const histSchema = new Schema ({
    events: {
        type: [String],
        required: true,
    },
    dates: {
        type: [String],
        required: true,
    },
    numEvents: {
        type: int,
        required: true,
    }

})

histSchema.statics.host = async function(events, dates, numEvents) {

    const hist = await this.create({ events, dates, numEvents })

    return hist
}

module.exports = mongoose.model('Notification', notifSchema)