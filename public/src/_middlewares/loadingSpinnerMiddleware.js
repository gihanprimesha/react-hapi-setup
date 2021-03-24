'use strict';

import { commonConstants, loadingSelectArray } from '../_constants';
import {
    hideMessage,
    addPendingActions,
    removePendingActions,
} from '../_actions/';

const loadingSpinnerMiddleware = (store) => (next) => (action) => {
    const isRequest = action.type.includes('REQUEST');
    const isCompleted = action.type.includes('COMPLETE');

    if (isRequest) {
        const actionType = action.type.split('_REQUEST')[0];
        if (loadingSelectArray.includes(actionType)) {
            store.dispatch(addPendingActions(actionType));
        }

        store.dispatch(hideMessage());
    }

    if (isCompleted) {
        const actionType = action.type.split('_COMPLETE')[0];
        store.dispatch(removePendingActions(actionType));
    }

    next(action);
};

export { loadingSpinnerMiddleware };
