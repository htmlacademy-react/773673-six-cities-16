import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Offer } from '@/types/offer';

import { offers } from '@/mocks/offers';
import { RootState } from '@/types/store';

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

const filterOffersByCity = (offersList: Offer[], cityName: string) =>
  offersList.filter((offer) => offer.city.name === cityName);

export const selectOffers = (state: RootState) => state.offers.offers;

export const selectOffersByCity = (state: RootState, name: string) => {
  const offersList = selectOffers(state);

  return filterOffersByCity(offersList, name);
};

export default offersSlice.reducer;
