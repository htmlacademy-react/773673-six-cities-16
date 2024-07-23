import { Offer } from '@/types/offer';
import { OfferCard } from './offer-card';

type OffersListPropsType = {
  offers: Offer[];
  kind: 'cities' | 'favorites' | 'nearby';
};

export const OffersList = ({ offers, kind }: OffersListPropsType) => {
  const prefixMap = {
    cities: 'cities__places-list places__list tabs__content',
    favorites: 'favorites__places',
    nearby: 'near-places__list places__list',
  };

  const className = prefixMap[kind];

  return (
    <div className={className}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} kind={kind} offer={offer} />
      ))}
    </div>
  );
};
