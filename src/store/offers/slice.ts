import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Offer } from '@/types/offer';

import { toggleFavorite } from '../favorites/async-actions';
import { fetchOffers } from './async-actions';

type OffersState = {
  entities: Offer[];
  isLoading: boolean;
  activeOffer: Offer | null;
};

const initialState: OffersState = {
  entities: [],
  isLoading: false,
  activeOffer: null,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    loaded: (state, action: PayloadAction<Offer[]>) => {
      state.entities = action.payload;
    },
    activeOfferChanged: (state, action: PayloadAction<Offer | null>) => {
      state.activeOffer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchOffers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOffers.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(toggleFavorite.fulfilled, (state, action) => {
      const changedEntity = state.entities.find(
        (entity) => entity.id === action.payload.id,
      );
      if (changedEntity) {
        changedEntity.isFavorite = action.payload.isFavorite;
      }
    });
  },
});

export const { loaded: offersLoaded, activeOfferChanged } = offersSlice.actions;

export default offersSlice.reducer;
