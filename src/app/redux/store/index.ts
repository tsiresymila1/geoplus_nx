import { configureStore } from '@reduxjs/toolkit';
import {
  AuthState,
  REDUX_SLICE_AUTH_FEATURE_KEY,
  reduxSliceAuthReducer,
} from '../slice/auth.slice';
import { persistStore } from 'redux-persist';
import { ecryptReducer } from './encypted';

export const store = configureStore({
  reducer: {
    [REDUX_SLICE_AUTH_FEATURE_KEY]: ecryptReducer<AuthState>(
      reduxSliceAuthReducer
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
  // enhancers: [],
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
