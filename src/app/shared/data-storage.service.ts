import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipe/recipe.service';
import { RecipeModel } from './../recipe/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, exhaustMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
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
          this.recipeService.setRecipe(recipes);
        })
      );
  }

  //fetchRecipes() {
  //  return this.authService.user.pipe(
  //    take(1),
  //    exhaustMap((user) => {
  //      return this.http.get<RecipeModel[]>(
  //        'https://ng-shop-recipe-90217-default-rtdb.firebaseio.com/recipes.json',
  //        {
  //          params: new HttpParams().set(
  //            'auth',
  //            user!.token ? user!.token : ''
  //          ),
  //        }
  //      );
  //    }),
  //    map((recipes) => {
  //      return recipes.map((recipe) => {
  //        return {
  //          ...recipe,
  //          ingredients: recipe.ingredients ? recipe.ingredients : [],
  //        };
  //      });
  //    }),
  //    tap((recipes) => {
  //      this.recipeService.setRecipe(recipes);
  //    })
  //  );
  //}
}
