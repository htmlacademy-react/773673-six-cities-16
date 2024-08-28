import api from '@/api/api';
import { SendReviewDTO } from '@/components/send-review-form/types';
import { Review } from '@/types/review';
import { useEffect, useState } from 'react';

export const useLoadReviews = (id: string) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    api.reviews
      .getReviews(id)
      .then(setReviews)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return {
    reviews,
    setReviews,
    error,
    loading,
  };
};

export const useSendReview = (id: string) => {
  const sendReview = (data: SendReviewDTO) => api.reviews.sendReview(id, data);

  return sendReview;
};
