import { OfferType } from '..';
import { offersRepository } from './offers.repository';

type OffersStore = {
  offers: OfferType[];
  getOffers: () => void;
};

export const useOffers = (): OffersStore => ({
  offers: [],

  getOffers: function () {
    this.offers = offersRepository.getOffers();
  },
});
