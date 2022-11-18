import { IngredientsModel } from './../../shared/ingredients.model';
import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;

  constructor(public payload: IngredientsModel) {}
}

export class AddIngredientS implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: IngredientsModel[]) {}
}

export type ShoppingListActions = AddIngredient | AddIngredientS;
