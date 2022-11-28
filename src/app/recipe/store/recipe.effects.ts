import { AppState } from './../../store-root/index';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { RecipeModel } from './../recipe.model';
import { switchMap, map, withLatestFrom, of } from 'rxjs';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as RecipesActions from './recipe.action';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeEffects {
  storeRecipe$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(RecipesActions.storeRecipes),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([actionData, recipeState]) => {
          console.log(recipeState);
          return this.http.put(
            'https://ng-shop-recipe-90217-default-rtdb.firebaseio.com/recipes.json',
            recipeState.recipes
          );
        })
      );
    },
    { dispatch: false }
  );

  fetchRecipes$ = createEffect(() => {
    return this.action$.pipe(
      ofType(RecipesActions.fetchRecipes),
      switchMap(() => {
        return this.http.get<RecipeModel[]>(
          'https://ng-shop-recipe-90217-default-rtdb.firebaseio.com/recipes.json'
        );
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      map((recipes) => {
        return RecipesActions.setRecipes({ recipes });
      })
    );
  });
  constructor(
    private action$: Actions,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}
}
