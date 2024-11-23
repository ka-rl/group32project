const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

// Schema for volunteer history
const histSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Invalid email format'],
    },
    eventsAttended: {
        type: [String],
        required: true,
    },
});

// Static method to search volunteer history by email
histSchema.statics.searchVolunteerHistory = async function (email) {
    if (!email) {
        throw new Error('Email must be provided');
    }

    const volunteerHistory = await this.findOne({ email });
    if (!volunteerHistory) {
        throw new Error('No history found for this email');
    }

    return volunteerHistory.eventsAttended;
};

module.exports = mongoose.model('History', histSchema);
