import { FC } from 'react';

import { useLoadReviews, useSendReview } from '@/hooks/reviews';

import ReviewsList from '@/components/reviews-list';
import { SendReviewForm } from '@/components/send-review-form/form';
import { WithPrivate } from '@/components/with-private';
import { Spinner } from '@/shared/ui';

type Props = {
  id: string;
};

export const OfferReviews: FC<Props> = ({ id }) => {
  const sendReview = useSendReview(id);
  const { loading, error, reviews, setReviews } = useLoadReviews(id);

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  if (loading) {
    return <Spinner />;
  }

  const reviewsCount = reviews.length;

  const handleSendReview = ({
    text,
    rating,
  }: {
    text: string;
    rating: number;
  }) => {
    sendReview({ comment: text, rating }).then((review) => {
      setReviews((prev) => [...prev, review]);
    });
  };

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviewsCount}</span>
      </h2>
      <ReviewsList reviews={reviews} />
      <WithPrivate>
        <SendReviewForm onSubmit={handleSendReview} />
      </WithPrivate>
    </section>
  );
};
