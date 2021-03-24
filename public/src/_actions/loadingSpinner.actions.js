import { commonConstants } from '../_constants';

export function addPendingActions(actionType) {
    return {
        type: commonConstants.ADD_PENDING_ACTIONS,
        payload: actionType,
    };
}

export function removePendingActions(actionType) {
    return {
        type: commonConstants.REMOVE_PENDING_ACTIONS,
        payload: actionType,
    };
}
