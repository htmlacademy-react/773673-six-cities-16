import { Offer } from '@/types/offer';
import { CitiesOfferCard } from './offer-card-cities';
import { FavoritesOfferCard } from './offer-card-favorites';
import { OfferCardNearby } from './offer-card-nearby';

import { OfferCardProps } from './types';

type Props = OfferCardProps & {
  onOfferSelected?: (offer: Offer) => void;
  onOfferUnselected?: () => void;

  kind: 'cities' | 'favorites' | 'nearby';
};

export const OfferCard = ({
  onOfferSelected,
  onOfferUnselected,
  offer,
  kind,
}: Props) => {
  const kindToRender = {
    cities: (
      <CitiesOfferCard
        onOfferSelected={onOfferSelected}
        onOfferUnselected={onOfferUnselected}
        offer={offer}
      />
    ),
    favorites: <FavoritesOfferCard offer={offer} />,
    nearby: <OfferCardNearby offer={offer} />,
  };

  return kindToRender[kind];
};
