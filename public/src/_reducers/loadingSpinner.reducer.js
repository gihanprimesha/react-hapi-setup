'use strict';

import { commonConstants } from '../_constants/';
import { AJAX_ERROR } from '../_actions/';

export function loadingSpinnerReducer(
    state = {
        pendingRequests: [],
        show: false,
    },
    action
) {
    switch (action.type) {
        case commonConstants.ADD_PENDING_ACTIONS:
            return (state = {
                pendingRequests: [...state.pendingRequests, action.payload],
                show: true,
            });

        case commonConstants.REMOVE_PENDING_ACTIONS:
            state = {
                ...state,
                pendingRequests: state.pendingRequests.filter(
                    (item) => item !== action.payload
                ),
            };

            if (state.pendingRequests.length === 0) {
                state = {
                    ...state,
                    show: false,
                };
            }

            return state;

        case AJAX_ERROR:
            state = {
                ...state,
                pendingRequests: [],
                show: false,
            };

            return state;

        default:
            return state;
    }
}
