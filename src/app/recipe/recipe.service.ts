import { AppState } from '../store-root/index';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';
import { RecipeModel } from './recipe.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.action';
import * as RecipeActions from './store/recipe.action';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<RecipeModel[]>();

  private recipes: RecipeModel[] = [];

  constructor(private store: Store<AppState>) {}

  setRecipe(recipes: RecipeModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe() {
    //return this.recipes.slice();
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  addIngredientsToShoppingList(ingredients: IngredientsModel[]) {
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
