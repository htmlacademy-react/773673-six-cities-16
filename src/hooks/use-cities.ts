import { useDispatch, useSelector } from '@/hooks/store';

import { City } from '@/types/city';

import { selectOffersByCity } from '@/store/offers';
import { cityChanged, selectCurrentCity } from '@/store/current-city';

//@TODO: offersToLocationsList перенести в selectors
export const useFilterOffersByCity = () => {
  const currentCity = useSelector(selectCurrentCity);

  const filteredOffers = useSelector((state) =>
    selectOffersByCity(state, currentCity.name),
  );

  const dispatch = useDispatch();

  const changeCity = (city: City) => dispatch(cityChanged(city));

  return [currentCity, filteredOffers, changeCity] as const;
};
