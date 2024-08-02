import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { City } from '@/types/city';

import { cities } from '@/consts/cities';

type CurrentCityState = City;

const initialState: CurrentCityState = cities[0];

export const currentCitySlice = createSlice({
  name: 'currentCity',
  initialState,
  reducers: {
    changed: (state, action: PayloadAction<City>) => action.payload,
  },
});

export const { changed: cityChanged } = currentCitySlice.actions;

export default currentCitySlice.reducer;
