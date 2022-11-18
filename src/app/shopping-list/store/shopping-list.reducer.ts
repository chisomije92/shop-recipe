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
          return igIndex !== state.editedItemsIndex;
        }),
      };
    case ShoppingListActions.UPDATE_INGREDIENTS:
      const ingredient = state.ingredients[state.editedItemsIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload,
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedItemsIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredient: null,
        editedItemsIndex: -1,
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
        editedIngredient: null,
        editedItemsIndex: -1,
      };
    default:
      return state;
  }
}
