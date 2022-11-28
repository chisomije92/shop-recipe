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
    this.store.dispatch(RecipeActions.fetchRecipes());
  }

  addIngredientsToShoppingList(ingredients: IngredientsModel[]) {
    this.store.dispatch(ShoppingListActions.addIngredients({ ingredients }));
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }
}
