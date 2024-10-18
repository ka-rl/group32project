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
    }
})

userSchema.statics.register = async function(email, password) {

    //validation
    if (!email || !password){
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)){
        throw Error('Email is invalid')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }
    
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already in use')
    }

    const user = await this.create({ email, password })

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