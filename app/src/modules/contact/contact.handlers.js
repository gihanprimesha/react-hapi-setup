'use strict';

const contactServices = require('./contact.services');

const addContact = (request) => contactServices.addContact(request);

const deleteContact = (request) => contactServices.deleteContact(request);

module.exports = {
    addContact,
    deleteContact,
};
