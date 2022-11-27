import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store-root';
import { authState } from './auth.reducer';

export const selectAuth = (state: AppState) => state.auth;

export const selectAuthUser = createSelector(
  selectAuth,
  (state: authState) => state.user
);
