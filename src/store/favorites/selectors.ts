import { NameSpace } from '@/consts/namespace';
import { RootState } from '@/types/store';

type FavoritesSlice = Pick<RootState, NameSpace.Favorites>;

export const favoritesSelector = {
  entities: (state: FavoritesSlice) => state.favorites.entities,
  isLoading: (state: FavoritesSlice) => state.favorites.isLoading,
};
