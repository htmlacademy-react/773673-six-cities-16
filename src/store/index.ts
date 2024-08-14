import { configureStore } from '@reduxjs/toolkit';

import api from '@/api';

import offersReducer from './offers';
import currentCityReducer from './current-city';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    offers: offersReducer,
    currentCity: currentCityReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
