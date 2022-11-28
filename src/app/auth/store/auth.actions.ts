import { createAction, props } from '@ngrx/store';

export const authenticationSuccess = createAction(
  '[Auth] Login',
  props<{
    email: string;
    token: string;
    userId: string;
    expirationDate: Date;
    redirect: boolean;
  }>()
);

export const authenticationFail = createAction(
  '[Auth] Login fail',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');

export const loginStart = createAction(
  '[Auth] Login start',
  props<{ email: string; password: string }>()
);

export const signupStart = createAction(
  '[Auth] Signup start',
  props<{ email: string; password: string }>()
);

export const clearError = createAction('[Auth] Clear Error');

export const autoLogin = createAction('[Auth] Auto Login');
