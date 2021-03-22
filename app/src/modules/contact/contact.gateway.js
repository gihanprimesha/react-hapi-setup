'use strict';

const boom = require('@hapi/boom');
const Mongoose = require('mongoose');
const mappers = require('../../application/constant/common.constant');
const Contact = require('./contact');

const METHOD_ADD = 'ADD';
const METHOD_DELETE = 'DELETE';
const METHOD_LIST = 'LIST';

const mapper = {
    [mappers.POST_MAP]: {
        id: 'id',
        email: 'email',
        firstName: 'firstName',
        lastName: 'lastName',
        phone: 'phone',
        location: 'location',
    },
};

const getDataBaseStructuredData = (map, contactData) => {
    const data = {};
    const newMap = mapper[map];

    for (const key in newMap) {
        if (contactData[key]) {
            data[newMap[key]] = contactData[key];
        }
    }

    return data;
};

const getObjectStructuredContactData = (map, contactData) => {
    const data = {};
    const newMap = mapper[map];

    for (const key in newMap) {
        data[newMap[key]] = contactData[key];
    }

    return data;
};

const writeReadContactData = async (method, dbMappedContactData) => {
    if (method === METHOD_ADD) {
        const contact = new Contact(dbMappedContactData);

        return contact
            .save()
            .then((result) => {
                return getObjectStructuredContactData(mappers.POST_MAP, result);
            })

            .catch((err) => {
                const error = new Error(err);
                throw boom.boomify(error, { statusCode: 422 });
            });
    }

    if (method === METHOD_DELETE) {
        return Contact.deleteOne({ _id: dbMappedContactData.id })
            .then((result) => {
                return getObjectStructuredContactData(mappers.POST_MAP, result);
            })

            .catch((err) => {
                const error = new Error(err);
                throw boom.boomify(error, { statusCode: 422 });
            });
    }

    if (method === METHOD_LIST) {
        const regex = new RegExp(dbMappedContactData, 'i');
        return Contact.find({
            $and: [
                {
                    $or: [
                        { firstName: regex },
                        { lastname: regex },
                        { email: regex },
                        { phone: regex },
                        { location: regex },
                    ],
                },
            ],
        })
            .exec()
            .then((result) => {
                const data = [];

                result.forEach((contact) => {
                    data.push(
                        getObjectStructuredContactData(
                            mappers.POST_MAP,
                            contact
                        )
                    );
                });

                return data;
            })

            .catch((err) => {
                const error = new Error(err);
                throw boom.boomify(error, { statusCode: 422 });
            });
    }
};

const addContact = async (data) => {
    try {
        const contact = data.payload;

        const dbMappedContactData = getDataBaseStructuredData(
            mappers.POST_MAP,
            contact
        );

        return await writeReadContactData(METHOD_ADD, dbMappedContactData);
    } catch (error) {
        return error;
    }
};

const deleteContact = async (data) => {
    try {
        const contact = { id: data.params.id };

        const dbMappedContactData = getDataBaseStructuredData(
            mappers.POST_MAP,
            contact
        );

        return await writeReadContactData(METHOD_DELETE, dbMappedContactData);
    } catch (error) {
        return error;
    }
};

const listContact = async (data) => {
    try {
        const { search } = data.payload;

        return await writeReadContactData(METHOD_LIST, search);
    } catch (error) {
        return error;
    }
};

module.exports = {
    addContact,
    deleteContact,
    listContact,
};
