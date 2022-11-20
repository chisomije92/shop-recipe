import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_START = '[Auth] Login Start';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(
    public payload: {
      email: string;
      token: string;
      userId: string;
      expirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions = Login | Logout;
