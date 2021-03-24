'use strict';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const contactSchema = mongoose.Schema({
    firstName: { type: String, required: true, maxlength: 50 },
    lastName: { type: String, required: true, maxlength: 50 },
    email: { type: String, required: true, unique: true, maxlength: 100 },
    phone: { type: String, required: true, unique: true, maxlength: 20 },
    location: { type: String, required: true, maxlength: 100 },
});

contactSchema.plugin(uniqueValidator);

const Contact = mongoose.model('contacts', contactSchema);

module.exports = Contact;
