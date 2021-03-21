'use strict';

const contactHandlers = require('./contact.handlers');

const routes = [
    {
        method: 'POST',
        path: '/api/v1/contact/add',
        handler: contactHandlers.addContact,
    },

    {
        method: 'GET',
        path: '/api/v1/contact/delete',
        handler: contactHandlers.addContact,
    },
];

module.exports = routes;
