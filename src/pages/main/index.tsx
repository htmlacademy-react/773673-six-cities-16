import { ReactNode, useState } from 'react';

import { City } from '@/types/city';
import { Offer } from '@/types/offer';

import { Navigation } from './ui/navigation';

import { offers } from '@/mocks/offers';
import { cities } from '@/consts/cities';
import { LocationsList } from '@/components/locations-list';
import { EmptyLocation } from './ui/empty-location';

const locationsMap = cities.reduce((acc, current) => {
  const offersByCity = offers.filter(({ city }) => city.name === current.name);
  acc.set(current, offersByCity);

  return acc;
}, new Map<City, Offer[]>());

export const Main = (): ReactNode => {
  const [currentCity, setCurrentCity] = useState<City>(cities[0]);
  const currentOffers = locationsMap.get(currentCity) as Offer[];

  const handleChangeCity = (city: City) => {
    setCurrentCity(city);
  };

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Navigation
              cities={cities}
              currentCity={currentCity}
              onChangeCity={handleChangeCity}
            />
          </section>
        </div>
        <div className="cities">
          {currentOffers.length ? (
            <LocationsList offers={currentOffers} currentCity={currentCity} />
          ) : (
            <EmptyLocation currentCity={currentCity} />
          )}
        </div>
      </main>
    </div>
  );
};
