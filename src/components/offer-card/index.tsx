import { CitiesOfferCard } from './offer-card-cities';
import { FavoritesOfferCard } from './offer-card-favorites';
import { OfferCardNearby } from './offer-card-nearby';

import { OfferCardProps } from './types';

type Props = OfferCardProps & {
  kind: 'cities' | 'favorites' | 'nearby';
};

export const OfferCard = ({ offer, kind }: Props) => {
  const kindToRender = {
    cities: <CitiesOfferCard offer={offer} />,
    favorites: <FavoritesOfferCard offer={offer} />,
    nearby: <OfferCardNearby offer={offer} />,
  };

  return kindToRender[kind];
};
