import { take } from 'rxjs';
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
    this.store.dispatch(new RecipesActions.fetchRecipes());
    return this.action$.pipe(ofType(RecipesActions.SET_RECIPES), take(1));
  }
}
