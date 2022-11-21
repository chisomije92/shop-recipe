import { RecipeModel } from './../recipe.model';
import { Action } from '@ngrx/store';

export const SET_RECIPES = '[recipe] set recipes';
export const FETCH_RECIPES = '[recipe] fetch recipes';
export class setRecipes implements Action {
  readonly type = SET_RECIPES;

  constructor(public payload: RecipeModel[]) {}
}

export class fetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}

export type RecipeActions = setRecipes;
