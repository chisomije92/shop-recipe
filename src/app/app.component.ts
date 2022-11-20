import { AppState } from './store-root/index';
import { Store } from '@ngrx/store';

import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    //this.authService.autoLogin();
    this.store.dispatch(new AuthActions.AutoLogin());
  }
}
