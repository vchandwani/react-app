import { put }  from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

//generator function
export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    //dispatches below action
    yield put({
        type: actionTypes.AUTH_LOGOUT
    });
}