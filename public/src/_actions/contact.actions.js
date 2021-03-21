'use strict';

import { contactConstants } from '../_constants';

export const contactAddRequest = (payload) => ({
    type: contactConstants.CONTACT_ADD_REQUEST,
    payload: payload,
});

export const contactAddComplete = (payload) => ({
    type: contactConstants.CONTACT_ADD_COMPLETE,
    payload: payload,
});

export const contactDeleteRequest = (payload) => ({
    type: contactConstants.CONTACT_DELETE_REQUEST,
    payload: payload,
});

export const contactDeleteComplete = (payload) => ({
    type: contactConstants.CONTACT_DELETE_COMPLETE,
    payload: payload,
});

export const contactListRequest = (payload) => ({
    type: contactConstants.CONTACT_LIST_REQUEST,
    payload: payload,
});

export const contactListComplete = (payload) => ({
    type: contactConstants.CONTACT_LIST_COMPLETE,
    payload: payload,
});
