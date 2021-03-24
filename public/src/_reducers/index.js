'use strict';

import { application } from './application.reducer';
import { sample } from './sample.reducer';
import { contact } from './contact.reducer';
import { loadingSpinnerReducer } from './loadingSpinner.reducer';
import { serverMessageReducer } from './serverMessage.reducer';

export default {
    application,
    sample,
    contact,
    loader: loadingSpinnerReducer,
    serverMessage: serverMessageReducer,
};
