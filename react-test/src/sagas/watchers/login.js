import { call, put,takeLatest } from 'redux-saga/effects';
import {login} from '../../api/loginApi'
import {LOGIN_SAGA} from '../../actions/actionTypes'
import {loginToSiteSuccess, loginToSiteError} from '../../actions/loginAction'

export function* WorkerLoginSaga(data) {
    try {
        const user = yield call(login,data.data);
        yield put(loginToSiteSuccess(user));
    } catch (e) {
      yield put(loginToSiteError());
    }
  }
  
  export function* watchLoginSaga() {
    yield takeLatest(LOGIN_SAGA, WorkerLoginSaga);
  }