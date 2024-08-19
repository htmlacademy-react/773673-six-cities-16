import { SendReviewDTO } from '@/components/send-review-form/types';
import { Review } from '@/types/review';

import { client } from './client';

type ReviewsResponse = Review[];

const getReviews = async (id: string) => {
  try {
    const response = await client.get<ReviewsResponse>(`comments/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch reviews', {
      cause: error,
    });
  }
};

type SendReviewResponse = {
  comment: string;
  rating: number;
};

const sendReview = async (id: string, data: SendReviewDTO) => {
  try {
    const response = await client.post<SendReviewResponse>(
      `comments/${id}`,
      data,
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to send review', {
      cause: error,
    });
  }
};

export const reviewsApi = {
  getReviews,
  sendReview,
};
