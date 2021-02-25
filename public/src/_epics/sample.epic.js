'use strict';

import { ofType } from 'redux-observable';
import { delay, map, mapTo, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { sampleActionComplete } from '../_actions/';
import { ajax } from 'rxjs/ajax';

import { sampleConstants } from '../_constants/';
import { ajaxError } from '../_actions';

export const sampleEpic = (action$) => {
    return action$.pipe(
        ofType(sampleConstants.SAMPLE_REQUEST),
        mergeMap((action) => {
            return ajax.getJSON(`https://api.github.com/users/`).pipe(
                map((response) => {
                    return sampleActionComplete(response.login);
                }),
                catchError((error) => of(ajaxError(error)))
            );
        })
    );
};
