import { OfferType } from '..';

type OffersListPropsType = {
  offers: OfferType[];
  renderCard: (offer: OfferType) => JSX.Element;
  kind: 'cities' | 'favorites' | 'nearby';
};

export const OffersList = ({
  offers,
  renderCard,
  kind,
}: OffersListPropsType) => {
  const prefixMap = {
    cities: 'cities__places-list places__list tabs__content',
    favorites: 'favorites__places',
    nearby: 'near-places__list places__list',
  };

  const className = prefixMap[kind];

  return <div className={className}>{offers.map(renderCard)}</div>;
};
