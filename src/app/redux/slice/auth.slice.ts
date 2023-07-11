import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const REDUX_SLICE_AUTH_FEATURE_KEY = 'authSlice';

export interface AuthState {
  apiToken?: string;
  authToken?: string | null;
}

const initialState: AuthState = {
  authToken: undefined,
  apiToken: undefined,
};

export const reduxSliceAuthSlice = createSlice({
  name: REDUX_SLICE_AUTH_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    setUp: (state, { payload }: PayloadAction<AuthState>) => {
      state = payload;
      return state;
    },
    destroy: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const selectApiToken = (state: RootState) => state.authSlice.apiToken;
export const selectAuthToken = (state: RootState) => state.authSlice.authToken;
export const reduxSliceAuthReducer = reduxSliceAuthSlice.reducer;
export const { destroy, setUp } = reduxSliceAuthSlice.actions;
