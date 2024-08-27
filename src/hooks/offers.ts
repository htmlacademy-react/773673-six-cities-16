import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Offer } from '@/types/offer';
import { City } from '@/types/city';

import { useAppDispatch, useAppSelector } from './store';

import { fetchOffers } from '@/store/offers/async-actions';
import { offersSelector } from '@/store/offers/selectors';
import { activeOfferChanged } from '@/store/offers/slice';

import { SortingTypes } from '@/consts/sorting-types';

export const useLoadOffers = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(offersSelector.isLoading);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return { loading, error: undefined };
};

export const useFilterOffersByCity = (city: City) => {
  const filteredOffers = useAppSelector((state) =>
    offersSelector.filterdByCity(state, city.name),
  );

  return [filteredOffers] as const;
};

const sortOffersByType = (
  offers: Offer[],
  sortingType: SortingTypes,
  unsortedOffers: Offer[],
) => {
  switch (sortingType) {
    case SortingTypes.POPULAR:
      return unsortedOffers;
    case SortingTypes.PRICE_LOW_TO_HIGH:
      return offers.toSorted((a, b) => a.price - b.price);
    case SortingTypes.PRICE_HIGH_TO_LOW:
      return offers.toSorted((a, b) => b.price - a.price);
    case SortingTypes.TOP_RATED_FIRST:
      return offers.toSorted((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const useSortOffers = (offers: Offer[], unsortedOffers: Offer[]) => {
  const [currentSortingType, setCurrentSortingType] = useState<SortingTypes>(
    SortingTypes.POPULAR,
  );

  const sortedOffers = sortOffersByType(
    offers,
    currentSortingType,
    unsortedOffers,
  );

  return [sortedOffers, currentSortingType, setCurrentSortingType] as const;
};

export const useHoverOffer = () => {
  const dispatch = useAppDispatch();
  const activeOffer = useSelector(offersSelector.activeOffer);

  const setActiveOffer = (offer: Offer | null) => {
    dispatch(activeOfferChanged(offer));
  };

  return { activeOffer, setActiveOffer };
};
