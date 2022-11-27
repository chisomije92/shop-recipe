import { AppState } from './store-root/index';
import { Store } from '@ngrx/store';

import { AuthService } from './auth/auth.service';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AuthActions from './auth/store/auth.actions';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private store: Store<AppState>,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(AuthActions.autoLogin());
    }
  }
}
