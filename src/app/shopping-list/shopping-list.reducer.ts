import { IngredientsModel } from './../shared/ingredients.model';
import { Action } from '@ngrx/store';

const initialState = {
  ingredients: [
    new IngredientsModel('Apples', 5),
    new IngredientsModel('Tomatoes', 10),
  ],
};

export function shoppingListReducer(state = initialState, action: Action) {}
