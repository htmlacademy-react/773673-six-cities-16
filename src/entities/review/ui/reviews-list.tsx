import { Review, type ReviewType } from '..';

type TProps = {
  reviews: ReviewType[];
};

const ReviewsList = ({ reviews }: TProps) => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <Review key={review.id} {...review} />
    ))}
  </ul>
);

export default ReviewsList;
