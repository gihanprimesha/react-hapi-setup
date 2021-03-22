'use strict';

const contactGateway = require('./contact.gateway');

const addContact = (data) => contactGateway.addContact(data);

const deleteContact = (data) => contactGateway.deleteContact(data);

const listContact = (search) => contactGateway.listContact(search);

module.exports = {
    addContact,
    deleteContact,
    listContact,
};
