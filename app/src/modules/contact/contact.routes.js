'use strict';

const joi = require('joi');
const contactHandlers = require('./contact.handlers');

const routes = [
    {
        method: 'POST',
        path: '/api/v1/contact/add',
        handler: contactHandlers.addContact,
    },

    {
        method: 'GET',
        path: '/api/v1/contact/delete/{id}',
        handler: contactHandlers.deleteContact,
    },

    {
        method: 'POST',
        path: '/api/v1/contact/list',
        handler: contactHandlers.listContact,
    },
];

module.exports = routes;
