import { IngredientsModel } from './../../shared/ingredients.model';
import { createAction, props } from '@ngrx/store';

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
