import { cityChanged, currentCitySelector } from '@/store/current-city';
import { useAppDispatch, useAppSelector } from './store';
import { City } from '@/types/city';

export const useCitiesNavigation = () => {
  const currentCity = useAppSelector(currentCitySelector.currentCity);

  const dispatch = useAppDispatch();

  const changeCity = (city: City) => {
    dispatch(cityChanged(city));
  };

  return { currentCity, changeCity };
};
