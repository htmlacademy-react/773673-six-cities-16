import { configureStore } from '@reduxjs/toolkit';

import api from '@/api';

import offersReducer from './offers';
import userReducer from './user/slice';
import favoritesReducer from './favorites/slice';

export const store = configureStore({
  reducer: {
    offers: offersReducer,
    user: userReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
