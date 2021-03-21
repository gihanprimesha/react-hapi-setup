'use strict';

import { contactConstants } from '../_constants/';

export function contact(state = { list: [], contact: {} }, action) {
    switch (action.type) {
        case contactConstants.CONTACT_ADD_COMPLETE:
            state = {
                ...state,
                contact: action.payload,
            };

            break;

        case contactConstants.CONTACT_LIST_COMPLETE:
            state = {
                ...state,
                list: action.payload,
            };

            break;

        default:
            state = {
                ...state,
            };
    }

    return state;
}
