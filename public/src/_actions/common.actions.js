'use strict';

import { commonConstants } from '../_constants';

export function ajaxError(error) {
    console.log(error);

    return {
        type: commonConstants.AJAX_ERROR,
        paylaod: error,
    };
}
