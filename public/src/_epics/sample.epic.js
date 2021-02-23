'use strict';

import { ofType } from 'redux-observable';
import { delay, map, mapTo, mergeMap } from 'rxjs/operators';
import { sampleActionComplete } from '../_actions/';
import { ajax } from 'rxjs/ajax';

import { sampleConstants } from '../_constants/';

export const sampleEpic = (action$) => {
    console.log(action$);
    return action$.pipe(
        ofType(sampleConstants.SAMPLE_REQUEST),
        mergeMap((action) => {
            return ajax.getJSON(`https://api.github.com/users/gihan`).pipe(
                map((response) => {
                    sampleActionComplete(response);
                })
            );
        })
    );
};
