'use strict';

import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
    delay,
    map,
    mapTo,
    mergeMap,
    concatMap,
    catchError,
} from 'rxjs/operators';
import { of } from 'rxjs';
import {
    contactAddComplete,
    contactListComplete,
    contactDeleteComplete,
    contactListRequest,
    ajaxError,
} from '../_actions/';

import { contactConstants } from '../_constants/';

export const contactAddEpic = (action$) =>
    action$.pipe(
        ofType(contactConstants.CONTACT_ADD_REQUEST),
        mergeMap((action) =>
            ajax.post(`/api/v1/contact/add`, action.payload).pipe(
                concatMap((data) =>
                    of(
                        contactAddComplete(data.response),
                        contactListRequest('')
                    )
                ),
                catchError((error) => of(ajaxError(error)))
            )
        )
    );

export const contactDeleteEpic = (action$) =>
    action$.pipe(
        ofType(contactConstants.CONTACT_DELETE_REQUEST),
        mergeMap((action) =>
            ajax.get(`/api/v1/contact/delete/${action.payload.id}`).pipe(
                concatMap((data) =>
                    of(
                        contactDeleteComplete(data.response),
                        contactListRequest('')
                    )
                ),

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
