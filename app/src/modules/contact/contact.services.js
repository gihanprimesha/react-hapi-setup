'use strict';

const contactGateway = require('./contact.gateway');

const addContact = (data) => contactGateway.addContact(data);

const deleteContact = (data) => contactGateway.deleteContact(data);

module.exports = {
    addContact,
    deleteContact,
};
