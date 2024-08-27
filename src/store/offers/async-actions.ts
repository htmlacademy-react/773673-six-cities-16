import { AppApi } from '@/api';
import { Offer } from '@/types/offer';
import { AppDispatch, RootState } from '@/types/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOffers = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AppApi;
  }
>('offers/fetchOffers', (_arg, { extra: api }) => api.offers.getOffers());
