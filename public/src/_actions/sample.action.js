'use strict';

import { sampleConstants } from '../_constants';

export const sampleActionRequest = (payload) => {
    return {
        type: sampleConstants.SAMPLE_REQUEST,
        payload: payload,
    };
};

export const sampleActionComplete = (payload) => {
    return {
        type: sampleConstants.SAMPLE_COMPLETE,
        payload: payload,
    };
};
