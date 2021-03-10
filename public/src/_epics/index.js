'use strict';

import { combineEpics } from 'redux-observable';

import { sampleEpic } from './sample.epic';

export const rootEpic = combineEpics(sampleEpic);
