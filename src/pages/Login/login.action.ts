import { ILoginInfo } from './login';

export enum LOGIN_ACTION_TYPES {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  SET_LOADING = 'SET_LOADING',
}

export interface LoginState {
  loading: boolean;
  isUserAuthenticaed: boolean;
}

export interface LoginRequestAction {
  type: LOGIN_ACTION_TYPES.LOGIN_REQUEST;
  payload?: ILoginInfo;
}

export interface LoginSuccesAction {
  type: LOGIN_ACTION_TYPES.LOGIN_SUCCESS;
}

export interface LoginFailAction {
  type: LOGIN_ACTION_TYPES.LOGIN_FAILURE;
}

export interface SetLoadingAction {
  type: LOGIN_ACTION_TYPES.SET_LOADING;
  payload: boolean;
}

export type LoginActions = LoginRequestAction | LoginSuccesAction | LoginFailAction | LoginFailAction;
