import { commonConstants } from '../_constants';

export function showMessage(message) {
    return {
        type: commonConstants.SHOW_SERVER_MESSAGE,
        payload: message,
    };
}

export function hideMessage() {
    return {
        type: commonConstants.HIDE_SERVER_MESSAGE,
    };
}
