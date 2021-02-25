'use strict';

import { sampleConstants } from '../_constants/';

export function sample(state = { name: 'initial' }, action) {
    switch (action.type) {
        case sampleConstants.SAMPLE_COMPLETE:
            console.log('SAMPLE_COMPLETE');
            state = {
                ...state,
                name: action.payload,
            };

        
    }

    return state;
}
