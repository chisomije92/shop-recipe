import { recipeReducer, recipeState } from './../recipe/store/recipe.reducer';
import { authReducer, authState } from './../auth/store/auth.reducer';
import {
  ShoppingListState,
  shoppingListReducer,
} from '../shopping-list/store/shopping-list.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const rootReducer = {};

export interface AppState {
  shoppingList: ShoppingListState;
  auth: authState;
  recipes: recipeState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  shoppingList: shoppingListReducer,
  auth: authReducer,
  recipes: recipeReducer,
};
