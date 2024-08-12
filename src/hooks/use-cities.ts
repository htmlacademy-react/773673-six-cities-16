import { useAppDispatch, useAppSelector } from '@/hooks/store';

import { City } from '@/types/city';

import { selectOffersByCity } from '@/store/offers';
import { cityChanged, selectCurrentCity } from '@/store/current-city';

//@TODO: offersToLocationsList перенести в selectors
export const useFilterOffersByCity = () => {
  const dispatch = useAppDispatch();

  const currentCity = useAppSelector(selectCurrentCity);

  const filteredOffers = useAppSelector((state) =>
    selectOffersByCity(state, currentCity.name),
  );

  const changeCity = (city: City) => dispatch(cityChanged(city));

  return [currentCity, filteredOffers, changeCity] as const;
};
