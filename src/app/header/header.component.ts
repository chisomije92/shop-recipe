import { AppState } from './../store-root/index';
import { Store } from '@ngrx/store';
import { Subscription, map } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as AuthActions from './../auth/store/auth.actions';
import * as RecipesActions from '../recipe/store/recipe.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth = false;
  userSub!: Subscription;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.userSub = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.isAuth = !!user;
      });
  }

  onSaveData() {
    this.store.dispatch(RecipesActions.storeRecipes());
  }

  onFetchData() {
    this.store.dispatch(RecipesActions.fetchRecipes());
  }

  onLogout() {
    //this.store.dispatch(new AuthActions.Logout());
    this.store.dispatch(AuthActions.logout());
  }

  ngOnDestroy(): void {
    this.userSub!.unsubscribe();
  }
}
