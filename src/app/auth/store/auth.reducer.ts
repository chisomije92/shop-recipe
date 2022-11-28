import { createReducer, on } from '@ngrx/store';
import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface authState {
  user: User | null;
  authError: string | null;
  loading: boolean;
}

const initialState: authState = {
  user: null,
  authError: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.authenticationSuccess,
    (state, { email, userId, token, expirationDate }) => {
      const user = new User(email, userId, token, expirationDate);
      return {
        ...state,
        authError: null,
        user,
        loading: false,
      };
    }
  ),
  on(AuthActions.logout, (state) => ({ ...state, user: null })),
  on(AuthActions.loginStart, (state) => ({
    ...state,
    authError: null,
    loading: true,
  })),
  on(AuthActions.signupStart, (state) => ({
    ...state,
    authError: null,
    loading: true,
  })),
  on(AuthActions.authenticationFail, (state, { error }) => ({
    ...state,
    user: null,
    authError: error,
    loading: false,
  })),
  on(AuthActions.clearError, (state) => ({ ...state, authError: null }))
);

//export function authReducer(
//  state = initialState,
//  action: AuthActions.AuthActions
//) {
//  switch (action.type) {
//    case AuthActions.AUTHENTICATION_SUCCESS:
//      const user = new User(
//        action.payload.email,
//        action.payload.userId,
//        action.payload.token,
//        action.payload.expirationDate
//      );
//      return {
//        ...state,
//        authError: null,
//        user: user,
//        loading: false,
//      };
//    case AuthActions.LOGOUT:
//      return {
//        ...state,
//        user: null,
//      };
//    case AuthActions.LOGIN_START:
//    case AuthActions.SIGNUP_START:
//      return {
//        ...state,
//        authError: null,
//        loading: true,
//      };
//    case AuthActions.AUTHENTICATION_FAIL:
//      return {
//        ...state,
//        user: null,
//        authError: action.payload,
//        loading: false,
//      };
//    case AuthActions.CLEAR_ERROR:
//      return {
//        ...state,
//        authError: null,
//      };
//    default:
//      return state;
//  }
//}
