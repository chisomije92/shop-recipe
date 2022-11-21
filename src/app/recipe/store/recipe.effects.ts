import { HttpClient } from '@angular/common/http';
import { RecipeModel } from './../recipe.model';
import { switchMap, map } from 'rxjs';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as RecipesActions from './recipe.action';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeEffects {
  fetchRecipes = createEffect(() => {
    console.log('started');
    return this.action$.pipe(
      ofType(RecipesActions.FETCH_RECIPES),
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
        return new RecipesActions.SetRecipes(recipes);
      })
    );
  });
  constructor(private action$: Actions, private http: HttpClient) {}
}
