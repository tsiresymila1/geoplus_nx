import { Reducer } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistConfig: PersistConfig<any, any, any, any> = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: 'my-super-secret-key',
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};

export function ecryptReducer<T>(baseReducer: Reducer) {
    return persistReducer<T>(persistConfig, baseReducer);
}
  
