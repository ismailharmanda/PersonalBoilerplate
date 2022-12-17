import { LoginRequestAction, LOGIN_ACTION_TYPES, SetLoadingAction } from './login.action';
import { ForkEffect, put, call, takeLatest } from 'redux-saga/effects';
import { GenericActionCreator } from 'utils';
import { getAllBlogs } from 'services';
import { AxiosResponse } from 'axios';

function* LoginRequestSaga(action: LoginRequestAction) {
  console.log(action);
  try {
    const loginData: AxiosResponse = yield call(getAllBlogs);
    console.log(loginData);
  } catch (err) {
    console.log(err);
  } finally {
    yield put(GenericActionCreator<SetLoadingAction>({ type: LOGIN_ACTION_TYPES.SET_LOADING, payload: false }));
  }
}

export default function* LoginModuleSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(LOGIN_ACTION_TYPES.LOGIN_REQUEST, LoginRequestSaga);
}
