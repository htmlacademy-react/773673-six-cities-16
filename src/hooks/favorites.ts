import { ROUTE_PATHS } from '@/consts/routes';
import { AuthorizationStatus } from '@/types/user';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './store';
import { Offer } from '@/types/offer';
import {
  fetchFavorites,
  toggleFavorite,
} from '@/store/favorites/async-actions';
import { favoritesSelector } from '@/store/favorites/selectors';
import { useEffect } from 'react';
import { userSelector } from '@/store/user/selectors';
import { OfferExtended } from '@/types/offer-extended';

export const useLoadFavorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useSelector(favoritesSelector.entities);
  const isLoading = useSelector(favoritesSelector.isLoading);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return { favorites, isLoading };
};

export const useToggleFavorite = (offer: Offer | OfferExtended | null) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authorizationStatus = useSelector(userSelector.authorizationStatus);

  if (!offer) {
    return () => {};
  }

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const nextStatus = Number(!offer.isFavorite) as 0 | 1;

  const toggleFavoriteCallback = () => {
    if (!isAuthorized) {
      return navigate(ROUTE_PATHS.LOGIN);
    }

    dispatch(toggleFavorite({ offerId: offer.id, status: nextStatus }));
  };

  return toggleFavoriteCallback;
};
