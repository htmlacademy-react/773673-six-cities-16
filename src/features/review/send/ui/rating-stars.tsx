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
    {/* <input */}
    {/*   onChange={(evt) => onRatingChange(Number(evt.target.value))} */}
    {/*   className="form__rating-input visually-hidden" */}
    {/*   name="rating" */}
    {/*   value="5" */}
    {/*   id="5-stars" */}
    {/*   type="radio" */}
    {/* /> */}
    {/* <label */}
    {/*   htmlFor="5-stars" */}
    {/*   className="reviews__rating-label form__rating-label" */}
    {/*   title="perfect" */}
    {/* > */}
    {/*   <svg className="form__star-image" width="37" height="33"> */}
    {/*     <use xlinkHref="#icon-star"></use> */}
    {/*   </svg> */}
    {/* </label> */}
  </div>
);

export default ReviewRatingStars;
