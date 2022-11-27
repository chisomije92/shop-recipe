import { IngredientsModel } from './../../shared/ingredients.model';
import { Action, createAction, props } from '@ngrx/store';

//export const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
//export const ADD_INGREDIENTS = '[Shopping List] Add ingredients';
//export const DELETE_INGREDIENTS = '[Shopping List] Delete Ingredients';
//export const UPDATE_INGREDIENTS = '[Shopping List] Update Ingredients';
//export const START_EDIT = '[Shopping List] Start Edit';
//export const STOP_EDIT = '[Shopping List] Stop Edit';

//export class AddIngredient implements Action {
//  readonly type = ADD_INGREDIENT;

//  constructor(public payload: IngredientsModel) {}
//}

//export class AddIngredients implements Action {
//  readonly type = ADD_INGREDIENTS;

//  constructor(public payload: IngredientsModel[]) {}
//}

//export class UpdateIngredients implements Action {
//  readonly type = UPDATE_INGREDIENTS;

//  constructor(public payload: IngredientsModel) {}
//}

//export class DeleteIngredients implements Action {
//  readonly type = DELETE_INGREDIENTS;

//  //constructor(public payload: number) {}
//  constructor() {}
//}

//export class StartEdit implements Action {
//  readonly type = START_EDIT;

//  constructor(public payload: number) {}
//}

//export class StopEdit implements Action {
//  readonly type = STOP_EDIT;
//}

//export type ShoppingListActions =
//  | AddIngredient
//  | AddIngredients
//  | UpdateIngredients
//  | DeleteIngredients
//  | StartEdit
//  | StopEdit;

export const addIngredient = createAction(
  '[Shopping List] Add ingredient',
  props<{ ingredient: IngredientsModel }>()
);
export const addIngredients = createAction(
  '[Shopping List] Add ingredients',
  props<{ ingredients: IngredientsModel[] }>()
);

export const updateIngredient = createAction(
  '[Shopping List] Update ingredient',
  props<{ ingredient: IngredientsModel }>()
);

export const deleteIngredient = createAction(
  '[Shopping List] Delete ingredient'
);

export const startEdit = createAction(
  '[Shopping List] Start edit',
  props<{ selectedIndex: number }>()
);

export const stopEdit = createAction('[Shopping List] Stop edit');
