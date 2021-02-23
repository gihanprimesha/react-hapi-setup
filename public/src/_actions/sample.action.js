'use strict';

import { sampleConstants } from '../_constants';

export const sampleActionRequest = (payload) => {
    console.log('sampleActionRequest');
    return {
        type: sampleConstants.SAMPLE_REQUEST,
        payload: payload,
    };
};

export const sampleActionComplete = (payload) => {
    console.log(payload);

    return {
        type: sampleConstants.SAMPLE_COMPLETE,
        payload: payload,
    };
};
