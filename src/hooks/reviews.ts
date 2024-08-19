import api from '@/api';
import { SendReviewDTO } from '@/components/send-review-form/types';

export const useSendReview = (id: string) => {
  const sendReview = (data: SendReviewDTO) => api.reviews.sendReview(id, data);

  return sendReview;
};
