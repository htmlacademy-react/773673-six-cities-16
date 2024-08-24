import api from '@/api';
import { SendReviewDTO } from '@/components/send-review-form/types';
import { useAsync } from '@/shared/hooks/useAsync';

export const useLoadReviews = (id: string) =>
  useAsync(async () => api.reviews.getReviews(id), [id]);

export const useSendReview = (id: string) => {
  const sendReview = (data: SendReviewDTO) => api.reviews.sendReview(id, data);

  return sendReview;
};
