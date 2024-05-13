const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name : String,
    lastName : String,
    number : Number,
    email: String

}, {timestamps:true})

const Contact=mongoose.model('Contact',ContactSchema)

module.exports = Contact 