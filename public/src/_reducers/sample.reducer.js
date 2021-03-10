'use strict';

import { sampleConstants } from '../_constants/';

export function sample(state = { name: 'initial' }, action) {
    switch (action.type) {
        case sampleConstants.SAMPLE_COMPLETE:
            state = {
                ...state,
                name: action.payload,
            };

            break;

        default:
            state = {
                ...state,
            };
    }

    return state;
}
