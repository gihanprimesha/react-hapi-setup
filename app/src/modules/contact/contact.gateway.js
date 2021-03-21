'use strict';

const boom = require('@hapi/boom');
const mappers = require('../../application/constant/common.constant');

const METHOD_ADD = 'ADD';
const METHOD_DELETE = 'DELETE';

const mapper = {
    [mappers.POST_MAP]: {
        email: 'email',
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

const writeContactData = (method, dbMappedContactData) => {
    if (method === METHOD_ADD) {
        const project = db.contacts.build(dbMappedContactData);

        return project
            .save()
            .then((result) => {
                const objStructedContactData = getObjectStructuredContactData(
                    mapObj.DATABASE_MAP,
                    result.dataValues
                );
                return objStructedContactData;
            })
            .catch(db.sequelize.ValidationError, (err) => {
                const error = new Error(err.errors[0].message);

                throw boom.boomify(error, { statusCode: 422 });
            })
            .catch((err) => {
                throw err;
            });
    }

    if (method === METHOD_DELETE) {
        const contactId = dbMappedContactData.contact_id;

        return db.contacts
            .destroy({
                where: { contact_id: contactId },
            })
            .then((result) => {
                if (result !== 1) {
                    const error = new Error(
                        services.errorMessages.contact.notFound
                    );
                    throw boom.boomify(error, { statusCode: 404 });
                }

                return {};
            })
            .catch((err) => {
                throw err;
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

        return await writeContactData(METHOD_ADD, dbMappedContactData);
    } catch (error) {
        return error;
    }
};

const deleteContact = (data) => {};

module.exports = {
    addContact,
    deleteContact,
};
