import { all, fork } from 'redux-saga/effects';

import authSagas from './authSagas';

export default function* rootSaga(getState) {
  yield all([
    fork(authSagas)
  ]);
}

