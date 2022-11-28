import { AppState } from '../store-root/index';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.action';
import * as RecipeActions from './store/recipe.action';

@Injectable()
export class RecipeService {
  constructor(private store: Store<AppState>) {}

  getRecipe() {
    this.store.dispatch(RecipeActions.fetchRecipes());
  }

  addIngredientsToShoppingList(ingredients: IngredientsModel[]) {
    this.store.dispatch(ShoppingListActions.addIngredients({ ingredients }));
  }
}
