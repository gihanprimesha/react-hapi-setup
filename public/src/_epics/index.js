'use strict';

import { combineEpics } from 'redux-observable';

import { sampleEpic } from './sample.epic';
import {
    contactAddEpic,
    contactDeleteEpic,
    contactListEpic,
} from './contact.epic';

export const rootEpic = combineEpics(
    sampleEpic,
    contactAddEpic,
    contactDeleteEpic,
    contactListEpic
);
