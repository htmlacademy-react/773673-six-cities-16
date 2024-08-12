import { configureStore } from '@reduxjs/toolkit';

import api from '@/api';

import offersReducer from './offers';
import currentCityReducer from './current-city';

export const store = configureStore({
  reducer: {
    offers: offersReducer,
    currentCity: currentCityReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
