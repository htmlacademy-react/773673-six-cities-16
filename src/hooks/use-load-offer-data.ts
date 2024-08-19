import api from '@/api';
import { useAsync } from '@/shared/hooks/use-async';

export const useLoadOfferData = (id: string) => {
  const { loading, error, value } = useAsync(() =>
    Promise.all([
      api.offers.getOfferById(id),
      api.offers.getOffersNearby(id),
      api.reviews.getReviews(id),
    ]),
  );

  return { loading, error, data: value };
};
