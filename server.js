'use strict';

const Mongoose = require('mongoose');
const Hapi = require('@hapi/hapi');
const plugins = require('./app/src/application/plugins');
const routes = require('./app/src/application/application.routes');
const { logger } = require('./app/src/helpers/logger.helper');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    await server.register(plugins);
    Mongoose.connect(
        'mongodb+srv://cs-tech-ventures:lRdT4XEm1sX1CQ0U@cs-tech-ventures-assign.95hih.mongodb.net/contact_list?retryWrites=true&w=majority'
    );

    await server.route(routes());

    await server.start();

    logger.log('info', `Server running at: ${server.info.uri}`);

    await server.ext('onPreResponse', (request, h) => {
        logger.log(
            'info',
            `Response data : ${JSON.stringify(h.request.response.source)}`
        );
        return h.request.response.source;
    });
};

process.on('unhandledRejection', (err) => {
    logger.log('error', err);
    process.exit(1);
});

init();
