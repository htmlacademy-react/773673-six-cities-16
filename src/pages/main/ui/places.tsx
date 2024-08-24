import { useState } from 'react';

import { Offer } from '@/types/offer';

import { useFilterOffersByCity, useLoadOffers } from '@/hooks/offers';

import { LocationsTitle } from './locations-title';
import { SortedOffers } from './sorted-offers';
import { EmptyLocation } from './empty-location';

import { Map as MapComponent } from '@/components/map';

import { WithLoader } from '@/shared/hoc';

export const Places = () => {
  const { loading } = useLoadOffers();
  const [currentCity, currentOffers] = useFilterOffersByCity();
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined,
  );

  const offersCount = currentOffers.length;
  const isEmpty = offersCount === 0;

  const handleOfferHovered = (offer: Offer) => {
    setSelectedOffer(offer);
  };

  const handleOfferUnhovered = () => {
    setSelectedOffer(undefined);
  };

  return !isEmpty ? (
    <WithLoader isLoading={loading}>
      <div className="cities">
        <div className="cities__places-container container">
          <SortedOffers
            offers={currentOffers}
            onOfferUnhoverd={handleOfferUnhovered}
            onOfferHoverd={handleOfferHovered}
          >
            <LocationsTitle offersCount={offersCount} city={currentCity.name} />
          </SortedOffers>
          <div className="cities__right-section">
            <MapComponent
              kind="cities"
              city={currentCity}
              points={currentOffers}
              selectedPoint={selectedOffer}
            />
          </div>
        </div>
      </div>
    </WithLoader>
  ) : (
    <EmptyLocation city={currentCity} />
  );
};
