import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store-root';

export const appState = (state: AppState) => state;

export const selectRecipes = createSelector(
  appState,
  (state: AppState) => state.recipes
);
