'use strict';

import { AJAX_ERROR, showMessage } from '../_actions/';

const serverMessageMiddleware = (store) => (next) => (action) => {
    if (action.type === AJAX_ERROR) {
        store.dispatch(showMessage({ type: 'error', message: action.payload }));
    }

    next(action);
};

export { serverMessageMiddleware };
