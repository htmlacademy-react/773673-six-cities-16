import { useDispatch, useSelector } from '@/hooks/store';

import { City } from '@/types/city';
import { Offer } from '@/types/offer';

import { changeCity } from '@/store/actions';

import { offersToLocationsList } from '@/shared/lib';

export const useCities = (cities: City[]) => {
  const { currentCity, offers } = useSelector((state) => ({
    currentCity: state.currentCity,
    offers: state.offers,
  }));

  const locationsMap = offersToLocationsList(cities, offers);
  const currentOffers = locationsMap.get(currentCity) as Offer[];

  const dispatch = useDispatch();

  const setCity = (city: City) => dispatch(changeCity(city));

  return [currentCity, currentOffers, setCity] as const;
};
