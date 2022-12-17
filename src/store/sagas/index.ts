import LoginModuleSaga from 'pages/Login/login.saga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga(): Generator {
  yield all([fork(LoginModuleSaga)]);
}
