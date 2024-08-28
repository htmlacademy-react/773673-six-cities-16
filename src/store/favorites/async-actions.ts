import { AppApi } from '@/api/api';
import { Offer } from '@/types/offer';
import { AppDispatch, RootState } from '@/types/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AppApi;
  }
>('favorites/fetch', async (_arg, { extra: api }) => api.offers.getFavorites());

export const toggleFavorite = createAsyncThunk<
  Offer,
  { offerId: string; status: 0 | 1 },
  { dispatch: AppDispatch; state: RootState; extra: AppApi }
>('favorites/toggleFavorite', async ({ offerId, status }, { extra: api }) =>
  api.offers.changeFavoriteStatus(offerId, status),
);
