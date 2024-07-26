import { cities } from '@/consts/cities';
import { offers } from '@/mocks/offers';
import { createReducer } from '@reduxjs/toolkit';
import { cityChanged, offersLoaded } from './actions';

const initialState = {
  currentCity: cities[0],
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChanged, (state, action) => {
      const { payload: city } = action;
      state.currentCity = city;
    })
    .addCase(offersLoaded, (state, action) => {
      const { payload: offersList } = action;
      state.offers = offersList;
    });
});
