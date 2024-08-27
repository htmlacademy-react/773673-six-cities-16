import { FC, useState } from 'react';
import ReviewRatingStars from './rating-stars';

import { SendReviewFormData } from './types';

const initialState: SendReviewFormData = {
  text: '',
  rating: 0,
};

type Props = {
  onSubmit: ({ text, rating }: { text: string; rating: number }) => void;
};

export const SendReviewForm: FC<Props> = ({ onSubmit }): JSX.Element => {
  const [formData, setFormData] = useState<SendReviewFormData>(initialState);

  const submitDisabled =
    formData.text.length < 50 ||
    formData.text.length > 300 ||
    formData.rating === 0;

  const handleRatingChanged = (rating: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      rating,
    }));
  };

  const handleTextChanged = (text: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      text,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      text: formData.text,
      rating: formData.rating,
    });

    setFormData(initialState);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewRatingStars onRatingChange={handleRatingChanged} />
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
          disabled={submitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
