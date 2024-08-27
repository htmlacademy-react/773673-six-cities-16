type ReviewRatingStarProps = {
  value: number;
  onRatingChange: (rating: number) => void;
};

enum OfferRate {
  'terribly' = 1,
  'badly',
  'not bad',
  'good',
  'perfect',
}

const ReviewRatingStar = ({ value, onRatingChange }: ReviewRatingStarProps) => (
  <>
    <input
      onChange={(event) => onRatingChange(Number(event.target.value))}
      className="form__rating-input visually-hidden"
      name="rating"
      value={value}
      id={`${value}-stars`}
      type="radio"
    />
    <label
      htmlFor={`${value}-stars`}
      className="reviews__rating-label form__rating-label"
      title={OfferRate[value]}
    >
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);

export default ReviewRatingStar;
