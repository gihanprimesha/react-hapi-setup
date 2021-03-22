'use strict';

import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { delay, map, mapTo, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {
    contactAddComplete,
    contactListComplete,
    contactDeleteComplete,
    ajaxError,
} from '../_actions/';

import { contactConstants } from '../_constants/';

export const contactAddEpic = (action$) =>
    action$.pipe(
        ofType(contactConstants.CONTACT_ADD_REQUEST),
        mergeMap((action) =>
            ajax.getJSON(`https://api.github.com/users/`).pipe(
                map((response) => contactAddComplete(response)),
                catchError((error) => of(ajaxError(error)))
            )
        )
    );

export const contactDeleteEpic = (action$) =>
    action$.pipe(
        ofType(contactConstants.CONTACT_DELETE_REQUEST),
        mergeMap((action) =>
            ajax.getJSON(`https://api.github.com/users/`).pipe(
                map((response) => contactDeleteComplete(response)),
                catchError((error) => of(ajaxError(error)))
            )
        )
    );

export const contactListEpic = (action$) =>
    action$.pipe(
        ofType(contactConstants.CONTACT_LIST_REQUEST),
        mergeMap((action) => {
            return ajax
                .post(`/api/v1/contact/list`, { search: action.payload })
                .pipe(
                    map((data) => contactListComplete(data.response)),
                    catchError((error) => of(ajaxError(error)))
                );
        })
    );
