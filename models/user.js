const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {type: String , required: true},
    lastName: {type: String , required: true},
    email: {type: String , required: true , unique: true , match: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/},
    password: {type: String},
})

userSchema.pre('save',async function (next) {

    if(!this.isModified('password')) 
    return next()
    const hash = await bcrypt.hash(this.password, 5)
    this.password = hash
    next()
})

const model = mongoose.model('User', userSchema)

module.exports = model;