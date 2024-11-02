const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema
//wont let us save to DB unless these rules are followed
const notifSchema = new Schema ({
    type: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }

})

notifSchema.statics.host = async function(type, content, link) {

    const notification = await this.create({ type, content, link })

    return notification
}

module.exports = mongoose.model('Notification', notifSchema)