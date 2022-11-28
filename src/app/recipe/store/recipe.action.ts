import { RecipeModel } from './../recipe.model';
import { createAction, props } from '@ngrx/store';

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
