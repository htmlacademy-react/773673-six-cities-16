import ReviewRatingStar from './rating-star';

type ReviewRatingStarsProps = {
  onRatingChange: (rating: number) => void;
};

const renderStars = (
  onRatingChange: (rating: number) => void,
  count: number = 5,
): React.ReactElement[] => {
  const elements: Array<React.ReactElement> = [];

  for (let index = 0; index < count; index++) {
    elements.unshift(
      <ReviewRatingStar
        key={index}
        value={index + 1}
        onRatingChange={onRatingChange}
      />,
    );
  }

  return elements;
};

const ReviewRatingStars = ({ onRatingChange }: ReviewRatingStarsProps) => (
  <div className="reviews__rating-form form__rating">
    {renderStars(onRatingChange)}
  </div>
);

export default ReviewRatingStars;
