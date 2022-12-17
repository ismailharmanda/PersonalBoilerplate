import { LoginState } from 'pages/Login/login.action';
import loginReducer from 'pages/Login/login.reducer';
import { CombinedState, combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';

export interface IGlobalState {
  LOGIN: LoginState;
  router: RouterState;
}

const createRootReducer = (history: unknown): Reducer<CombinedState<IGlobalState>> =>
  combineReducers<IGlobalState>({
    router: connectRouter(history),
    LOGIN: loginReducer,
  });

export default createRootReducer;
