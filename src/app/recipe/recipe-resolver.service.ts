import { take, map, switchMap, of } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RecipeService } from './recipe.service';
import { DataStorageService } from './../shared/data-storage.service';
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
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private store: Store<AppState>,
    private action$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //const recipes = this.recipeService.getRecipe();
    //if (recipes.length === 0) {
    //  return this.dataStorageService.fetchRecipes();
    //} else {
    //  return recipes;
    //}
    return this.store.select('recipes').pipe(
      take(1),
      map((recipeState) => recipeState.recipes),
      switchMap((recipes) => {
        if (recipes.length === 0) {
          this.store.dispatch(new RecipesActions.FetchRecipes());
          return this.action$.pipe(ofType(RecipesActions.SET_RECIPES), take(1));
        } else {
          return of(recipes);
        }
      })
    );
  }
}
