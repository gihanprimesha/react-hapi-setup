'use strict';

import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { delay, map, mapTo, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { sampleActionComplete, ajaxError } from '../_actions/';

import { sampleConstants } from '../_constants/';

export const sampleEpic = (action$) =>
    action$.pipe(
        ofType(sampleConstants.SAMPLE_REQUEST),
        mergeMap((action) =>
            ajax.getJSON(`https://api.github.com/users/`).pipe(
                map((response) => sampleActionComplete(response.login)),
                catchError((error) => of(ajaxError(error)))
            )
        )
    );
