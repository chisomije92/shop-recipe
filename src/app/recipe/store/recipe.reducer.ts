import { RecipeModel } from './../recipe.model';
import * as RecipeActions from './recipe.action';

export interface recipeState {
  recipes: RecipeModel[];
}

const initialState: recipeState = {
  recipes: [],
};

export function recipeReducer(
  state = initialState,
  action: RecipeActions.RecipeActions
) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };
    default:
      return state;
  }
}
