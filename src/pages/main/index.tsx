import { ReactNode, useState } from 'react';

import { useLoadOffers } from '@/hooks/use-load-offers';
import { useFilterOffersByCity } from '@/hooks/use-cities';
import { useSortOffers } from '@/hooks/use-sort-offers';

import { City } from '@/types/city';
import { Offer } from '@/types/offer';

import { CitiesList } from './ui/cities-list';
import { EmptyLocation } from './ui/empty-location';
import { LocationsTitle } from './ui/locations-title';
import { SortingMenu } from './ui/sorting-menu';

import { Map as MapComponent } from '@/components/map';
import { OffersList } from '@/components/offers-list';

import { cities } from '@/consts/cities';
import { SortingTypes } from '@/consts/sorting-types';

import { WithLoader } from '@/shared/hoc';

export const Main = (): ReactNode => {
  const [isLoading] = useLoadOffers();

  const [currentCity, currentOffers, changeCity] = useFilterOffersByCity();

  const [sortedOffers, sortingType, changeSortingType] =
    useSortOffers(currentOffers);

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined,
  );

  const offersCount = currentOffers.length;

  const handleCityChanged = (city: City) => {
    changeCity(city);
  };

  const handleSortingTypeChanged = (type: SortingTypes) => {
    changeSortingType(type);
  };

  const handleOfferSelected = (offer: Offer) => {
    setSelectedOffer(offer);
  };

  const handleOfferUnselected = () => {
    setSelectedOffer(undefined);
  };

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={cities}
              currentCity={currentCity}
              onCityChanged={handleCityChanged}
            />
          </section>
        </div>
        <div className="cities">
          <WithLoader isLoading={isLoading}>
            {currentOffers.length ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <LocationsTitle
                    offersCount={offersCount}
                    city={currentCity.name}
                  />
                  <SortingMenu
                    currentSortingType={sortingType}
                    onSortingTypeChanged={handleSortingTypeChanged}
                  />
                  <OffersList
                    kind="cities"
                    offers={sortedOffers}
                    onOfferSelected={handleOfferSelected}
                    onOfferUnselected={handleOfferUnselected}
                  />
                </section>
                <div className="cities__right-section">
                  <MapComponent
                    kind="cities"
                    city={currentCity}
                    points={currentOffers}
                    selectedPoint={selectedOffer}
                  />
                </div>
              </div>
            ) : (
              <EmptyLocation currentCity={currentCity} />
            )}
          </WithLoader>
        </div>
      </main>
    </div>
  );
};
