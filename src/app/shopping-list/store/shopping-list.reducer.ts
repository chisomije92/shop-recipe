import { createReducer, on } from '@ngrx/store';
import { IngredientsModel } from '../../shared/ingredients.model';
import * as ShoppingListActions from './shopping-list.action';

export interface ShoppingListState {
  ingredients: IngredientsModel[];
  editedIngredient: IngredientsModel | null;
  editedItemsIndex: number;
}

const initialState: ShoppingListState = {
  ingredients: [
    new IngredientsModel('Apples', 5),
    new IngredientsModel('Tomatoes', 10),
  ],
  editedIngredient: null,
  editedItemsIndex: -1,
};

export const shoppingListReducer = createReducer(
  initialState,
  on(ShoppingListActions.addIngredient, (state, { ingredient }) => ({
    ...state,
    ingredients: [...state.ingredients, ingredient],
  })),
  on(ShoppingListActions.addIngredients, (state, { ingredients }) => ({
    ...state,
    ingredients: [...state.ingredients, ...ingredients],
  })),
  on(ShoppingListActions.updateIngredient, (state, { ingredient }) => {
    const existingIngredient = state.ingredients[state.editedItemsIndex];
    const updatedIngredient = {
      ...existingIngredient,
      ...ingredient,
    };
    const updatedIngredients = [...state.ingredients];
    updatedIngredients[state.editedItemsIndex] = updatedIngredient;
    return {
      ...state,
      ingredients: updatedIngredients,
      editedIngredient: null,
      editedItemsIndex: -1,
    };
  }),
  on(ShoppingListActions.deleteIngredient, (state) => ({
    ...state,
    ingredients: state.ingredients.filter((_, igIndex) => {
      return igIndex !== state.editedItemsIndex;
    }),
  })),

  on(ShoppingListActions.startEdit, (state, { selectedIndex }) => ({
    ...state,
    editedItemsIndex: selectedIndex,
    editedIngredient: { ...state.ingredients[selectedIndex] },
  })),

  on(ShoppingListActions.stopEdit, (state) => ({
    ...state,
    editedIngredient: null,
    editedItemsIndex: -1,
  }))
);
