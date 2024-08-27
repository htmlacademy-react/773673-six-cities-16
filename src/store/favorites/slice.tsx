import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Offer } from '@/types/offer';
import { fetchFavorites, toggleFavorite } from './async-actions';

type FavoritesState = {
  entities: Offer[];
  isLoading: boolean;
};

const initialState: FavoritesState = { entities: [], isLoading: false };

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    loaded: (state, action: PayloadAction<Offer[]>) => {
      state.entities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchFavorites.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFavorites.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(toggleFavorite.fulfilled, (state, action) => {
      if (action.payload.isFavorite) {
        state.entities.push(action.payload);
      } else {
        state.entities = state.entities.filter(
          ({ id }) => id !== action.payload.id,
        );
      }
    });
  },
});

export const { loaded: FavoritesLoaded } = favoritesSlice.actions;

export default favoritesSlice.reducer;
