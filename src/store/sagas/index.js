import {all} from 'redux-saga/effects';
import {authSaga} from '../entities/auth';

export default function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}
