import { configureStore } from '@reduxjs/toolkit';

import offersReducer from './offers';
import currentCityReducer from './current-city';

export const store = configureStore({
  reducer: {
    offers: offersReducer,
    currentCity: currentCityReducer,
  },
});
