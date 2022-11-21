import { Store } from '@ngrx/store';
import { RecipeService } from './../recipe/recipe.service';
import { RecipeModel } from './../recipe/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { AppState } from '../store-root';
import * as RecipeActions from './../recipe/store/recipe.action';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private store: Store<AppState>
  ) {}

  storeRecipe() {
    const recipes = this.recipeService.getRecipe();
    return this.http.put(
      'https://ng-shop-recipe-90217-default-rtdb.firebaseio.com/recipes.json',
      recipes
    );
  }

  fetchRecipes() {
    return this.http
      .get<RecipeModel[]>(
        'https://ng-shop-recipe-90217-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          //this.recipeService.setRecipe(recipes);
          this.store.dispatch(new RecipeActions.setRecipes(recipes));
        })
      );
  }
}
