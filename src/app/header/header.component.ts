import { AppState } from './../store-root/index';
import { Store, STORE_FEATURES } from '@ngrx/store';
import { Subscription, map } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
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
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.userSub = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.isAuth = !!user;
      });
  }

  onSaveData() {
    this.dataStorageService
      .storeRecipe()
      .subscribe((response) => console.log(response));
  }

  onFetchData() {
    //this.dataStorageService.fetchRecipes().subscribe();
    this.store.dispatch(new RecipesActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy(): void {
    this.userSub!.unsubscribe();
  }
}
