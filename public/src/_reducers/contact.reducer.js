'use strict';

import { contactConstants } from '../_constants/';

export function contact(state = { list: [], contact: {} }, action) {
    switch (action.type) {
        case contactConstants.CONTACT_ADD_COMPLETE:
            state = {
                ...state,
                contact: action.payload,
                loading: false,
            };

            break;

        case contactConstants.CONTACT_LIST_COMPLETE:
            state = {
                ...state,
                list: action.payload,
                loading: false,
            };

            break;

        case contactConstants.CONTACT_DELETE_COMPLETE:
            state = {
                ...state,
            };

            break;

        // case contactConstants.CONTACT_DELETE_REQUEST ||
        //     contactConstants.CONTACT_ADD_REQUEST ||
        //     contactConstants.CONTACT_LIST_REQUEST:
        //     state = {
        //         ...state,
        //         loading: true,
        //     };

        // break;

        default:
            state = {
                ...state,
            };
    }

    return state;
}
