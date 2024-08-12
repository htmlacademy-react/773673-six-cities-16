import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/types/store';
import { useAppDispatch } from './store';

import { fetchOffers, selectOffersLoading } from '@/store/offers';

export const useLoadOffers = () => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector((state: RootState) =>
    selectOffersLoading(state),
  );

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return [isLoading];
};
