import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { City } from '@/types/city';

import { cities } from '@/consts/cities';

type CurrentCityState = {
  currentCity: City;
};

const initialState: CurrentCityState = {
  currentCity: cities[0],
};

export const currentCitySlice = createSlice({
  name: 'currentCity',
  initialState,
  reducers: {
    changed: (state, action: PayloadAction<City>) => {
      state.currentCity = action.payload;
    },
  },
});

export const { changed: cityChanged } = currentCitySlice.actions;

export default currentCitySlice.reducer;