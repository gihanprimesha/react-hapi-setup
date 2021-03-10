'use strict';

import { sampleConstants } from '../_constants';

export const sampleActionRequest = (payload) => ({
    type: sampleConstants.SAMPLE_REQUEST,
    payload: payload,
});

export const sampleActionComplete = (payload) => ({
    type: sampleConstants.SAMPLE_COMPLETE,
    payload: payload,
});
