import { User } from '../user.model';

export interface authState {
  user: User | null;
}

const initialState: authState = {
  user: null,
};

export function authReducer(state: authState = initialState, action: any) {
  return state;
}
