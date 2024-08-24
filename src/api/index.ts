import { UserInfo } from '@/types/user';
import { client } from './client';
import { Offer } from '@/types/offer';

const checkAuth = async () => {
  try {
    const response = await client.get<UserInfo>('/login');
    return response.data;
  } catch (error) {
    throw new Error('Failed to check auth', { cause: error });
  }
};

type LoginRequest = {
  email: string;
  password: string;
};

const login = async ({ email, password }: LoginRequest) => {
  try {
    const response = await client.post<UserInfo>('/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to login', { cause: error });
  }
};

const logout = async () => {
  try {
    await client.delete('/logout');
  } catch (error) {
    throw new Error('Failed to logout', { cause: error });
  }
};

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
  login,
  logout,
  checkAuth,

  getOffers,
  getOfferById,
  getFavorites,
  getOffersNearby,
};

export type AppApi = typeof api;

export default api;
