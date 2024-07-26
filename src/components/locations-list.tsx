import { LocationsTitle } from '@/pages/main/ui/locations-title';
import { Map as MapComponent } from './map';
import { SortingTypes } from '@/pages/main/ui/sorting-types';
import { Offer } from '@/types/offer';
import { OffersList } from './offers-list';
import { City } from '@/types/city';

type LocationsListProps = { offers: Offer[]; currentCity: City };

export const LocationsList = ({ offers, currentCity }: LocationsListProps) => {
  const offersCount = offers.length;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>

        <LocationsTitle offersCount={offersCount} city={currentCity.name} />

        <SortingTypes />
        <OffersList kind="cities" offers={offers} />
      </section>
      <div className="cities__right-section">
        <MapComponent
          kind="cities"
          city={currentCity}
          points={offers}
          selectedPoint={offers[0]}
        />
      </div>
    </div>
  );
};
