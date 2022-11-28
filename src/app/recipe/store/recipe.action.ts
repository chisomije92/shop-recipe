import { RecipeModel } from './../recipe.model';
import { createAction, props, Action } from '@ngrx/store';

export const setRecipes = createAction(
  '[Recipes] Set recipes',
  props<{ recipes: RecipeModel[] }>()
);
export const fetchRecipes = createAction('[Recipes] Fetch recipes');
export const addRecipe = createAction(
  '[Recipes] Add recipe',
  props<{ recipe: RecipeModel }>()
);
export const updateRecipe = createAction(
  '[Recipes] Update recipes',
  props<{ index: number; newRecipe: RecipeModel }>()
);
export const deleteRecipe = createAction(
  '[Recipes] Delete Recipe',
  props<{ selectedIndex: number }>()
);
export const storeRecipes = createAction('[Recipes] Store Recipes');

//export const LOGIN = '[Auth] Login';
//export const AUTHENTICATE_SUCCESS = '[Auth] Login';
//export const LOGOUT = '[Auth] Logout';
//export const LOGIN_START = '[Auth] Login Start';
//export const LOGIN_FAIL = '[Auth] Login fail';
//export const AUTHENTICATE_FAIL = '[Auth] Login fail';
//export const SIGNUP_START = '[Auth] Signup Start';

//export const UPDATE_RECIPE = '[recipe] update recipe';
//export const ADD_RECIPE = '[recipe] add recipe';
//export const DELETE_RECIPE = '[recipe] delete recipe';
//export const STORE_RECIPES = '[recipe] store recipes';
//export const SET_RECIPES = '[recipe] set recipes';
//export const FETCH_RECIPES = '[recipe] fetch recipes';

//export class AddRecipe implements Action {
//  readonly type = ADD_RECIPE;
//  constructor(public payload: RecipeModel) {}
//}

//export class UpdateRecipe implements Action {
//  readonly type = UPDATE_RECIPE;
//  constructor(public payload: { index: number; newRecipe: RecipeModel }) {}
//}

//export class StoreRecipes implements Action {
//  readonly type = STORE_RECIPES;
//}

//export class DeleteRecipe implements Action {
//  readonly type = DELETE_RECIPE;
//  constructor(public payload: number) {}
//}

//export class SetRecipes implements Action {
//  readonly type = SET_RECIPES;
//  constructor(public payload: RecipeModel[]) {}
//}

//export class FetchRecipes implements Action {
//  readonly type = FETCH_RECIPES;
//}

//export type RecipeActions =
//  | SetRecipes
//  | FetchRecipes
//  | DeleteRecipe
//  | UpdateRecipe
//  | AddRecipe
//  | StoreRecipes;
