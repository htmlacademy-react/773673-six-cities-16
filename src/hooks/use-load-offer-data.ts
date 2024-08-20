import api from '@/api';
import { Offer } from '@/types/offer';
import { OfferExtended } from '@/types/offer-extended';
import { Review } from '@/types/review';
import { useEffect, useState } from 'react';

export const useLoadOfferData = (id: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const [offer, setOffer] = useState<OfferExtended | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [offersNearby, setOffersNearby] = useState<Offer[]>([]);

  useEffect(() => {
    Promise.all([
      api.offers.getOfferById(id),
      api.offers.getOffersNearby(id),
      api.reviews.getReviews(id),
    ])
      .then((data) => {
        setOffer(data[0]);
        setOffersNearby(data[1]);
        setReviews(data[2]);
      })
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  return { loading, error, offer, reviews, offersNearby, setReviews };
};
