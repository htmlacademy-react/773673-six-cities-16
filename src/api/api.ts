import { offersApi } from './offers';
import { reviewsApi } from './reviews';
import { userApi } from './user';

const api = {
  offers: offersApi,
  user: userApi,
  reviews: reviewsApi,
};

export type AppApi = typeof api;

export default api;
