import { NameSpace } from '@/consts/namespace';
import { Offer } from '@/types/offer';
import { RootState } from '@/types/store';

type OffersSlice = Pick<RootState, NameSpace.Offers>;
const filterOffersByCity = (offersList: Offer[], cityName: string) =>
  offersList.filter((offer) => offer.city.name === cityName);

export const offersSelector = {
  entities: (state: OffersSlice) => state.offers.entities,
  filterdByCity: (state: OffersSlice, name: string) => {
    const offers = state.offers.entities;
    return filterOffersByCity(offers, name);
  },
  isLoading: (state: OffersSlice) => state.offers.isLoading,
  activeOffer: (state: OffersSlice) => state.offers.activeOffer,
};
