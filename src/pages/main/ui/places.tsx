import { Offer } from '@/types/offer';

import {
  useFilterOffersByCity,
  useHoverOffer,
  useLoadOffers,
} from '@/hooks/offers';

import { LocationsTitle } from './locations-title';
import { SortedOffers } from './sorted-offers';
import { EmptyLocation } from './empty-location';

import { Map as MapComponent } from '@/components/map';

import { WithLoader } from '@/shared/hoc';
import { City } from '@/types/city';

export const Places = ({ city }: { city: City }) => {
  const { loading } = useLoadOffers();
  const [currentOffers] = useFilterOffersByCity(city);
  const { activeOffer, setActiveOffer } = useHoverOffer();

  const offersCount = currentOffers.length;
  const isEmpty = offersCount === 0;

  const handleOfferHovered = (offer: Offer) => {
    setActiveOffer(offer);
  };

  const handleOfferUnhovered = () => {
    setActiveOffer(null);
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
            <LocationsTitle offersCount={offersCount} city={city.name} />
          </SortedOffers>
          <div className="cities__right-section">
            <MapComponent
              kind="cities"
              city={city}
              points={currentOffers}
              selectedPoint={activeOffer}
            />
          </div>
        </div>
      </div>
    </WithLoader>
  ) : (
    <EmptyLocation city={city} />
  );
};
