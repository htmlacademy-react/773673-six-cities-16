import { Review } from '@/types/review';
import { ReviewItem } from './review-item';

type Props = {
  reviews: Review[];
};

const ReviewsList = ({ reviews }: Props) => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewItem key={review.id} review={review} />
    ))}
  </ul>
);

export default ReviewsList;
