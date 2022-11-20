import { AppState } from './../store-root/index';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './store/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthService {
  timer?: ReturnType<typeof setTimeout> | null;

  constructor(private store: Store<AppState>) {}

  setLogoutTimer(expirationDuration: number) {
    this.timer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
