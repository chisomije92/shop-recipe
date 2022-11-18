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

export function shoppingListReducer(
  state: ShoppingListState = initialState,
  action: ShoppingListActions.ShoppingListActions
): ShoppingListState {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListActions.DELETE_INGREDIENTS:
      return {
        ...state,
        ingredients: state.ingredients.filter((_, igIndex) => {
          return igIndex !== action.payload;
        }),
      };
    case ShoppingListActions.UPDATE_INGREDIENTS:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient,
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[action.payload.index] = updatedIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
      };
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedItemsIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] },
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
      };
    default:
      return {
        ...state,
        editedIngredient: null,
        editedItemsIndex: -1,
      };
  }
}
