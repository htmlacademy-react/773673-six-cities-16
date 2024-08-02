import { useState } from 'react';
import ReviewRatingStars from './rating-stars';

import { formatDate } from '@/shared/lib';
import { SendReviewDTO, SendReviewFormData } from './types';

const initialState: SendReviewFormData = {
  text: '',
  rating: 5,
};

type SendReviewFormProps = {
  id: string;
};

export const SendReviewForm = ({ id }: SendReviewFormProps): JSX.Element => {
  const [formData, setFormData] = useState<SendReviewFormData>(initialState);

  const submitDisabled = formData.text.length < 50;

  const sendReview = (data: SendReviewDTO) => data;

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

    const time = new Date();
    const formattedDateString = formatDate(time);

    sendReview({
      text: formData.text,
      rating: formData.rating,
      date: formattedDateString,
      offerId: id,
    });
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
