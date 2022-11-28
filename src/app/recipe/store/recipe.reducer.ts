import { createReducer, on } from '@ngrx/store';
import { RecipeModel } from './../recipe.model';
import * as RecipeActions from './recipe.action';

export interface recipeState {
  recipes: RecipeModel[];
}

const initialState: recipeState = {
  recipes: [],
};

//export function recipeReducer(
//  state = initialState,
//  action: RecipeActions.RecipeActions
//) {
//  switch (action.type) {
//    case RecipeActions.SET_RECIPES:
//return {
//  ...state,
//  recipes: [...action.payload],
//};
//    case RecipeActions.ADD_RECIPE:
//return {
//  ...state,
//  recipes: [...state.recipes, action.payload],
//};
//    case RecipeActions.UPDATE_RECIPE:
//const updatedRecipe = {
//  ...state.recipes[action.payload.index],
//  ...action.payload.newRecipe,
//};
//const updatedRecipes = [...state.recipes];
//updatedRecipes[action.payload.index] = updatedRecipe;
//return {
//  ...state,
//  recipes: [...updatedRecipes],
//};
//    case RecipeActions.DELETE_RECIPE:
//return {
//  ...state,
//  recipes: state.recipes.filter((_, index) => {
//    return index !== action.payload;
//  }),
//};
//    default:
//      return state;
//  }
//}

//export function recipeReducer(
//  state = initialState,
//  action: RecipeActions.RecipeActions
//) {
//  switch (action.type) {
//    case RecipeActions.SET_RECIPES:
//      return {
//        ...state,
//        recipes: [...action.payload],
//      };
//    case RecipeActions.ADD_RECIPE:
//      return {
//        ...state,
//        recipes: [...state.recipes, action.payload],
//      };
//    case RecipeActions.UPDATE_RECIPE:
//      const updatedRecipe = {
//        ...state.recipes[action.payload.index],
//        ...action.payload.newRecipe,
//      };
//      const updatedRecipes = [...state.recipes];
//      updatedRecipes[action.payload.index] = updatedRecipe;
//      return {
//        ...state,
//        recipes: [...updatedRecipes],
//      };
//    case RecipeActions.DELETE_RECIPE:
//      return {
//        ...state,
//        recipes: state.recipes.filter((_, index) => {
//          return index !== action.payload;
//        }),
//      };
//    default:
//      return state;
//  }
//}

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
