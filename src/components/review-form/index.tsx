import { useState } from 'react';

type ReviewFormProps = {
  onSubmit: (formData: { text: string; rating: number }) => void;
};

const initialState = {
  text: '',
  rating: 0,
  submitDisabled: true,
};

const ReviewForm = ({ onSubmit }: ReviewFormProps): JSX.Element => {
  const [formData, setFormData] = useState(initialState);

  const handleRatingChanged = (rating: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      rating,
    }));
  };

  const handleTextChanged = (text: string) => {
    const textLentgh = text.length;
    const submitDisabled = textLentgh < 50;
    setFormData((prevFormData) => ({
      ...prevFormData,
      text,
      textLentgh,
      submitDisabled,
    }));
  };

  return (
    <form
      onSubmit={() => onSubmit(formData)}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          onChange={(evt) => handleRatingChanged(Number(evt.target.value))}
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={(evt) => handleRatingChanged(Number(evt.target.value))}
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={(evt) => handleRatingChanged(Number(evt.target.value))}
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={(evt) => handleRatingChanged(Number(evt.target.value))}
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          onChange={(evt) => handleRatingChanged(Number(evt.target.value))}
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        onChange={(evt) => handleTextChanged(evt.target.value)}
        value={formData.text}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.submitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
