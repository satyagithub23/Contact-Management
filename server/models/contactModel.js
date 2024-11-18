const mongoose = require('mongoose')

const contactModel = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    company: { type: String },
    job: { type: String }
})

module.exports = mongoose.model('ContactModel', contactModel)