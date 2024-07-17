import { CitiesOfferCard } from './offer-card-cities';
import { FavoritesOfferCard } from './offer-card-favorites';
import { OfferCardNearby } from './offer-card-nearby';

import { OfferCardPropsType } from './types';

type OfferCardProps = OfferCardPropsType & {
  kind: 'cities' | 'favorites' | 'nearby';
};

export const OfferCard = ({ offer, kind, favoriteButton }: OfferCardProps) => {
  const kindToRender = {
    cities: <CitiesOfferCard offer={offer} favoriteButton={favoriteButton} />,
    favorites: (
      <FavoritesOfferCard offer={offer} favoriteButton={favoriteButton} />
    ),
    nearby: <OfferCardNearby offer={offer} favoriteButton={favoriteButton} />,
  };

  return kindToRender[kind];
};
