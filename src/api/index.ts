import { client } from './client';
import { Offer } from '@/types/offer';

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

type OfferByIdResponse = Offer;

const getOfferById = async (id: string) => {
  try {
    const response = await client.get<OfferByIdResponse>(`/offers${id}`);
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
    const response = await client.get<FavoritesResponse>('favorites');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch favorites', {
      cause: error,
    });
  }
};

type OffersNearbyResponse = Offer[];

const getOffersNearby = async (id: string) => {
  try {
    const response = await client.get<OffersNearbyResponse>(
      `/offers${id}/nearby`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch offers nearby', {
      cause: error,
    });
  }
};

const api = {
  getOffers,
  getOfferById,
  getFavorites,
  getOffersNearby,
};

export type AppApi = typeof api;

export default api;
