import { useEffect, useState } from 'react';

import { City } from '@/types/city';
import { Offer } from '@/types/offer';

import { useAppDispatch, useAppSelector } from './store';

import { fetchOffers, offersSelector } from '@/store/offers';
import { currentCitySelector, cityChanged } from '@/store/current-city';

import { SortingTypes } from '@/consts/sorting-types';

export const useLoadOffers = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(offersSelector.isLoading);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return [isLoading];
};

export const useFilterOffersByCity = () => {
  const dispatch = useAppDispatch();

  const currentCity = useAppSelector(currentCitySelector.currentCity);

  const filteredOffers = useAppSelector((state) =>
    offersSelector.filterdByCity(state, currentCity.name),
  );

  const changeCity = (city: City) => dispatch(cityChanged(city));

  return [currentCity, filteredOffers, changeCity] as const;
};

const sortOffersByType = (offers: Offer[], sortingType: SortingTypes) => {
  switch (sortingType) {
    case SortingTypes.POPULAR:
      return offers.sort((a, b) => b.rating - a.rating);
    case SortingTypes.PRICE_LOW_TO_HIGH:
      return offers.sort((a, b) => a.price - b.price);
    case SortingTypes.PRICE_HIGH_TO_LOW:
      return offers.sort((a, b) => b.price - a.price);
    case SortingTypes.TOP_RATED_FIRST:
    default:
      return offers;
  }
};

export const useSortOffers = (offers: Offer[]) => {
  const [currentSortingType, setCurrentSortingType] = useState<SortingTypes>(
    SortingTypes.POPULAR,
  );

  const sortedOffers = sortOffersByType(offers, currentSortingType);

  return [sortedOffers, currentSortingType, setCurrentSortingType] as const;
};
