import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Offer } from '@/types/offer';

import { offers } from '@/mocks/offers';

type OffersState = {
  offers: Offer[];
};

const initialState: OffersState = { offers };

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    loaded: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
  },
});

export const { loaded: offersLoaded } = offersSlice.actions;

export default offersSlice.reducer;
