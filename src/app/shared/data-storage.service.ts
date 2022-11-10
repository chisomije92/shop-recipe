import { RecipeService } from './../recipe/recipe.service';
import { RecipeModel } from './../recipe/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storedRecipe() {
    const recipes = this.recipeService.getRecipe();
    return this.http.put(
      'https://ng-shop-recipe-90217-default-rtdb.firebaseio.com/recipes.json',
      recipes
    );
    //.subscribe((response) => {
    //  console.log(response);
    //});
  }
}
