const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema
//wont let us save to DB unless these rules are followed
const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    
    preference: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        required: false
    },
})

userSchema.statics.register = async function(email, password, location, preference, availability, skills) {

    //validation
    if (!email || !password || !location || ! preference ||!availability || !skills){
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)){
        throw Error('Email is invalid')
    }
    // if (!validator.isStrongPassword(password)){
    //     throw Error('Password not strong enough')
    // }
    
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already in use')
    }

    const user = await this.create({ email, password, location, preference, availability, skills})

    return user
}

userSchema.statics.login = async function(email, password) {
    
    if (!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect email')
    }

    const match = (password == user.password)
    
    if (!match) {
        throw Error('Incorrect password')
    }

    return user

}

module.exports = mongoose.model('User', userSchema)