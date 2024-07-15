import { ReviewType } from '../../../../entities/review';

export type SendReviewType = Omit<ReviewType, 'id' | 'user'> & {
  offerId: string;
};

export const sendReview = (review: SendReviewType) => {
  console.log({ sendReview: review });
};
