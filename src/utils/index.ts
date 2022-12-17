import { AnyAction } from 'redux';

export interface IGenericAction {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  <T extends { type?: any; payload?: any }>({ type, payload }: T): AnyAction;
}

export const GenericActionCreator: IGenericAction = ({ type, payload }): AnyAction => ({
  type,
  payload,
});

export enum MAIN_ROUTES {
  LOGIN = 'Login',
  DASHBOARD = 'Dashboard',
}
