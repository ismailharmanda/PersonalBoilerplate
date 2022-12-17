import { LoginActions, LoginState, LOGIN_TYPES } from './login.action';

const initialState: LoginState = {
  loading: false,
};

export default (state = initialState, action: LoginActions) => {
  switch (action.type) {
    case LOGIN_TYPES.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
