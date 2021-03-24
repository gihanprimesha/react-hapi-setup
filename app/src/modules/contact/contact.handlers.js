'use strict';

const contactServices = require('./contact.services');

const addContact = (request) => contactServices.addContact(request);

const deleteContact = (request) => contactServices.deleteContact(request);

const listContact = (search, h) => {
    console.log(h);
    return contactServices.listContact(search);
};

module.exports = {
    addContact,
    deleteContact,
    listContact,
};
