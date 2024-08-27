import {
  type PayloadAction,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { Offer } from '@/types/offer';

import { AppDispatch, RootState } from '@/types/store';
import { AppApi } from '@/api';
import { NameSpace } from '@/consts/namespace';
import { toggleFavorite } from './favorites/async-actions';

type PickedSlice = Pick<RootState, NameSpace.Offers>;

export const fetchOffers = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AppApi;
  }
>('offers/fetchOffers', (_arg, { extra: api }) => api.offers.getOffers());

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

const filterOffersByCity = (offersList: Offer[], cityName: string) =>
  offersList.filter((offer) => offer.city.name === cityName);

export const offersSelector = {
  entities: (state: PickedSlice) => state.offers.entities,
  filterdByCity: (state: PickedSlice, name: string) => {
    const offers = state.offers.entities;
    return filterOffersByCity(offers, name);
  },
  isLoading: (state: PickedSlice) => state.offers.isLoading,
  activeOffer: (state: PickedSlice) => state.offers.activeOffer,
};

export default offersSlice.reducer;
