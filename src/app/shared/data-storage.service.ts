import { RecipeService } from './../recipe/recipe.service';
import { RecipeModel } from './../recipe/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipe() {
    const recipes = this.recipeService.getRecipe();
    return this.http.put(
      'https://ng-shop-recipe-90217-default-rtdb.firebaseio.com/recipes.json',
      recipes
    );
  }

  fetchRecipes() {
    this.http
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
        })
      )
      .subscribe((recipes) => {
        console.log(recipes);
        return this.recipeService.setRecipe(recipes);
      });
  }
}
