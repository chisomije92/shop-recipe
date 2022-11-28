import { HttpClient } from '@angular/common/http';
import { take, map, switchMap, of, tap } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RecipeModel } from './recipe.model';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import * as RecipesActions from './store/recipe.action';
import { AppState } from '../store-root';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<RecipeModel[]> {
  constructor(
    private store: Store<AppState>,
    private action$: Actions,
    private http: HttpClient
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('recipes').pipe(
      take(1),
      map((recipeState) => {
        return recipeState.recipes;
      }),
      switchMap((recipes) => {
        if (recipes.length === 0) {
          this.store.dispatch(RecipesActions.fetchRecipes());
          return this.action$.pipe(
            ofType(RecipesActions.setRecipes),
            map((action) => {
              return action.recipes;
            })
          );
        } else {
          return of(recipes);
        }
      })
    );
    //  return this.store.select('recipes').pipe(
    //    take(1),
    //    map((recipeState) => recipeState.recipes),
    //    switchMap((recipes) => {
    //      if (recipes.length === 0) {
    //        this.store.dispatch(new RecipesActions.FetchRecipes());
    //        return this.action$.pipe(ofType(RecipesActions.SET_RECIPES), take(1));
    //      } else {
    //        return of(recipes);
    //      }
    //    })
    //  );
  }
}
