import { ReactNode } from 'react';

import { useCities } from '@/hooks/use-cities';

import { City } from '@/types/city';

import { CitiesList } from './ui/cities-list';
import { EmptyLocation } from './ui/empty-location';

import { LocationsList } from '@/components/locations-list';

import { cities } from '@/consts/cities';

export const Main = (): ReactNode => {
  const [currentCity, currentOffers, changeCity] = useCities(cities);

  const handleChangeCity = (city: City) => {
    changeCity(city);
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
