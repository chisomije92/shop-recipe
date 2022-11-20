import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface authState {
  user: User | null;
}

const initialState: authState = {
  user: null,
};

export function authReducer(
  state: authState = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        user,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
  //return state;
}
