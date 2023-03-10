import {all, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {
  loginAction,
  loginActionSuccess,
  loginActionFailure,
} from './slice';
import { Alert } from 'react-native';
import { Storage } from '@utils';
function* handleSignIn({payload}) {
  try {
    const {email,password} = payload
    if (email && password) {  
      yield Storage.set('isLoggedIn',true);
      yield put(loginActionSuccess(true));
    } else {
      Alert.alert('Invalid credentials')
      yield put(loginActionFailure());
    }
  } catch (error) {
    yield put(loginActionFailure());
  }
};


function* watchFetchRequests() {
  yield takeLatest(loginAction, handleSignIn);
}

export function* authSaga() {
  yield all([fork(watchFetchRequests)]);
}
