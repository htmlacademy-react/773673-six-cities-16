import {
  type PayloadAction,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { Offer } from '@/types/offer';

import { AppDispatch, RootState } from '@/types/store';
import { AppApi } from '@/api';
import { NameSpace } from '@/consts/namespace';

type PickedSlice = Pick<RootState, NameSpace.Offers>;

export const fetchOffers = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AppApi;
  }
>('offers/fetchOffers', async (_arg, { extra: api }) => {
  try {
    const offersResponse = await api.offers.getOffers();
    return offersResponse;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    throw error;
  }
});

type OffersState = {
  entities: Offer[];
  isLoading: boolean;
};

const initialState: OffersState = { entities: [], isLoading: false };

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    loaded: (state, action: PayloadAction<Offer[]>) => {
      state.entities = action.payload;
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
  },
});

export const { loaded: offersLoaded } = offersSlice.actions;

const filterOffersByCity = (offersList: Offer[], cityName: string) =>
  offersList.filter((offer) => offer.city.name === cityName);

export const offersSelector = {
  entities: (state: PickedSlice) => state.offers.entities,
  filterdByCity: (state: PickedSlice, name: string) => {
    const offers = state.offers.entities;
    return filterOffersByCity(offers, name);
  },
  isLoading: (state: PickedSlice) => state.offers.isLoading,
};

export default offersSlice.reducer;
