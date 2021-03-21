'use strict';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const contactSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    location: { type: String, required: true },
});

contactSchema.plugin(uniqueValidator);

const Contact = mongoose.model('contacts', contactSchema);

module.exports = Contact;
