import { LoginActions, LoginState, LOGIN_ACTION_TYPES } from './login.action';

const initialState: LoginState = {
  loading: false,
  isUserAuthenticaed: false,
};

export default (state = initialState, action: LoginActions) => {
  switch (action.type) {
    case LOGIN_ACTION_TYPES.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
