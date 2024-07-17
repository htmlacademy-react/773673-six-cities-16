import { useState } from 'react';
import { CityType } from '../../../entities/city';
import { useOffers } from '../../../entities/offer';

export const useLocationsList = (cities: CityType[]) => {
  const [currentCity, setCurrentCity] = useState<CityType>(cities[0]);

  const offersStore = useOffers();
  offersStore.getOffers();

  const { offers } = offersStore;

  return {
    currentCity,
    setCurrentCity,
    offers,
  };
};
