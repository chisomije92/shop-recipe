import { createReducer, on } from '@ngrx/store';
import { RecipeModel } from './../recipe.model';
import * as RecipeActions from './recipe.action';

export interface recipeState {
  recipes: RecipeModel[];
}

const initialState: recipeState = {
  recipes: [],
};

export const recipeReducer = createReducer(
  initialState,
  on(RecipeActions.setRecipes, (state, { recipes }) => {
    return {
      ...state,
      recipes: [...recipes],
    };
  }),
  on(RecipeActions.addRecipe, (state, { recipe }) => {
    return {
      ...state,
      recipes: [...state.recipes, recipe],
    };
  }),
  on(RecipeActions.updateRecipe, (state, { index, newRecipe }) => {
    const updatedRecipe = {
      ...state.recipes[index],
      ...newRecipe,
    };
    const updatedRecipes = [...state.recipes];
    updatedRecipes[index] = updatedRecipe;
    return {
      ...state,
      recipes: [...updatedRecipes],
    };
  }),
  on(RecipeActions.deleteRecipe, (state, { selectedIndex }) => {
    return {
      ...state,
      recipes: state.recipes.filter((_, index) => {
        return index !== selectedIndex;
      }),
    };
  })
);
