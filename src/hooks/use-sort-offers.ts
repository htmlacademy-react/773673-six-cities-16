import { useState } from 'react';

import { Offer } from '@/types/offer';

import { SortingTypes } from '@/consts/sorting-types';

const sortOffersByType = (offers: Offer[], sortingType: SortingTypes) => {
  switch (sortingType) {
    case 'Popular':
      return offers.sort((a, b) => b.rating - a.rating);
    case 'Price: low to high':
      return offers.sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return offers.sort((a, b) => b.price - a.price);
    case 'Top rated first':
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
