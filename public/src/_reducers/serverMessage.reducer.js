import { commonConstants } from '../_constants';

export const INITIAL_SERVER_MESSAGE_STATE = {
    show: false,
    details: {
        type: '',
        content: '',
    },
};

export function serverMessageReducer(
    state = INITIAL_SERVER_MESSAGE_STATE,
    action
) {
    switch (action.type) {
        case commonConstants.SHOW_SERVER_MESSAGE:
            let message;
            if (typeof action.payload.message.response !== 'undefined') {
                message = action.payload.message.response;
            } else {
                message = 'Network error';
            }
            return {
                ...state,
                show: true,
                details: {
                    type: action.payload.type,
                    content: message,
                },
            };

        case commonConstants.HIDE_SERVER_MESSAGE:
            return INITIAL_SERVER_MESSAGE_STATE;

        default:
            return state;
    }
}
