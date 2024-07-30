import { useDispatch, useSelector } from '@/hooks/store';

import { City } from '@/types/city';
import { Offer } from '@/types/offer';

import { cityChanged } from '@/store/current-city';
import { offersToLocationsList } from '@/shared/lib';

//@TODO: offersToLocationsList перенести в selectors
export const useCities = (cities: City[]) => {
  const { currentCity, offers } = useSelector((state) => ({
    currentCity: state.currentCity.currentCity,
    offers: state.offers.offers,
  }));

  const locationsMap = offersToLocationsList(cities, offers);
  const currentOffers = locationsMap.get(currentCity) as Offer[];

  const dispatch = useDispatch();

  const setCity = (city: City) => dispatch(cityChanged(city));

  return [currentCity, currentOffers, setCity] as const;
};
