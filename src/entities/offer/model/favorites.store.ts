import { OfferType } from '..';
import { offersRepository } from './offers.repository';

type FavoritesStore = {
  favorites: OfferType[];
  getFavorites: () => void;
};

export const useFavorites = (): FavoritesStore => ({
  favorites: [],

  getFavorites: function () {
    this.favorites = offersRepository.getFavorites();
  },
});
