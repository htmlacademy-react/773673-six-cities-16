import { favorites } from '../mock/favorites';
import { offer, offers } from '../mock/offers';

export const offersRepository = {
  getOffers: () => offers,
  getFavorites: () => favorites,
  getOffer: () => offer,
  getOffersNearby: () => offers,
};
