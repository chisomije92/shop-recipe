import { RecipeModel } from './../recipe.model';
import { Action } from '@ngrx/store';

export const SET_RECIPE = '[recipe] set recipes';

export class setRecipes implements Action {
  readonly type = SET_RECIPE;

  constructor(public payload: RecipeModel[]) {}
}

export type RecipeActions = setRecipes;
