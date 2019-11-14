import { all, fork, takeLatest, call } from 'redux-saga/effects';
import * as actionTypes from '../../actionTypes';

import { fetchLogin, fetchRegister } from '../../api/authApi';

function* userLogin(action) {
  try {
    const res = yield call(fetchLogin, { ...action.data })
  } catch(err) {

  }
}

function* userRegister(action) {
  try {
    const res = yield call(fetchRegister, { ...action.data })
  } catch(err) {

  }
}

/**Auth Sagas */
function* Auth() {
  yield takeLatest(actionTypes.FETCH_LOGIN, userLogin);
  yield takeLatest(actionTypes.FETCH_REGISTER, userRegister);
}

/**Root Auth */
export default function* rootSaga() {
  yield all([fork(Auth)]);
}
