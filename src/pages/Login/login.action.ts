export enum LOGIN_TYPES {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}

export interface LoginState {
  loading: boolean;
}

export interface LoginRequestAction {
  type: LOGIN_TYPES.LOGIN_REQUEST;
}

export type LoginActions = LoginRequestAction;
