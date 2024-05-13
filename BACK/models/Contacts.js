const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    Name : String,
    LastName : String,
    Number : Number,
    Email: String

}, {timestamps:true})

const Contact=mongoose.model('Contact',ContactSchema)

module.exports = Contact 