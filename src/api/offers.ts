import { Offer } from '@/types/offer';
import { OfferExtended } from '@/types/offer-extended';

import { client } from './client';

type OffersResponse = Offer[];

const getOffers = async () => {
  try {
    const response = await client.get<OffersResponse>('/offers');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch offers', {
      cause: error,
    });
  }
};

type OfferByIdResponse = OfferExtended;

const getOfferById = async (id: string) => {
  try {
    const response = await client.get<OfferByIdResponse>(`/offers/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch offer by id', {
      cause: error,
    });
  }
};

type FavoritesResponse = Offer[];

const getFavorites = async () => {
  try {
    const response = await client.get<FavoritesResponse>('favorite');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch favorites', {
      cause: error,
    });
  }
};

const changeFavoriteStatus = async (offerId: string, status: 0 | 1) => {
  try {
    const response = await client.post<Offer>(`/favorite/${offerId}/${status}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to change favorite status', {
      cause: error,
    });
  }
};

type OffersNearbyResponse = Offer[];

const getOffersNearby = async (id: string) => {
  try {
    const response = await client.get<OffersNearbyResponse>(
      `/offers/${id}/nearby`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch offers nearby', {
      cause: error,
    });
  }
};

export const offersApi = {
  getOffers,
  getOfferById,
  getFavorites,
  changeFavoriteStatus,
  getOffersNearby,
};
