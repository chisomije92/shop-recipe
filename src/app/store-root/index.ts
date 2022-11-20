import { ShoppingListActions } from './../shopping-list/store/shopping-list.action';
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
}

export const reducers: ActionReducerMap<AppState, ShoppingListActions> = {
  shoppingList: shoppingListReducer,
  auth: authReducer,
};
