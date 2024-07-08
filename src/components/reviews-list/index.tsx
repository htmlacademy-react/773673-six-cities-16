import { Comment } from '../../types/comments';
import Review from '../review';

type TProps = {
  reviews: Comment[];
};

const ReviewsList = ({ reviews }: TProps) => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <Review key={review.id} {...review} />
    ))}
  </ul>
);

export default ReviewsList;
