import { useState } from 'react';

import { Offer } from '@/types/offer';

import { SortingTypes } from '@/consts/sorting-types';

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
