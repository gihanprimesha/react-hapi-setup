'use strict';

const responseObj = {};

const setCustomErrorSourceResponse = (h) => {
    const data = {};
    if (h.request.response.isJoi) {
        let message = 'Validation Error';

        if (h.request.response.details[0].message) {
            message = h.request.response.details[0].message;
        }
        data.response = {
            status: 'error',
            statusCode: h.request.response.output.statusCode,
            data: null,
            message: message,
        };
    } else {
        if (h.request.response.output) {
            data.response = {
                status: 'error',
                statusCode: h.request.response.output.statusCode,
                data: null,
                message: h.request.response.output.payload.message,
            };
        }
    }

    h.request.response.output.payload = data;

    return h;
};

const setCustomSuccessSourceResponse = (h) => {
    if (h.request.response.source) {
        const data = {};
        data.response = {
            status: 'success',
            statusCode: 200,
            data: h.request.response.source,
            message: '',
        };

        h.request.response.source = data;
    }
    return h;
};

const getCustomeResponse = (request, h) => {
    const response = { ...request.response };

    if (!response.isBoom) {
        h = setCustomSuccessSourceResponse(h);
        return h.continue;
    }

    h = setCustomErrorSourceResponse(h);
    return h.continue;
};

const errorMessages = {
    user: {
        notFound: 'User not found',
    },

    auth: {
        notFound: 'Email Does not exist',
        passwordNotMatch: 'Password do not match',
    },
};

module.exports = {
    getCustomeResponse: getCustomeResponse,
    errorMessages: errorMessages,
};
