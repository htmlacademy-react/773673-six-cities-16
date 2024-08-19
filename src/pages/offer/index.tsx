import { useParams } from 'react-router-dom';

import { SendReviewForm } from '@/components/send-review-form/form';
import { OffersList } from '@/components/offers-list';
import { WithPrivate } from '@/components/with-private';
import ReviewsList from '@/components/reviews-list';
import { Map } from '@/components/map';

import { Features } from './ui/features';
import { Gallery } from './ui/gallery';
import { Goods } from './ui/goods';
import { Host } from './ui/host';

import { useLoadOfferData } from '@/hooks/use-load-offer-data';
import { useSendReview } from '@/hooks/reviews';

import { useForceUpdate } from '@/shared/hooks/use-force-update';
import { RatingStars } from '@/shared/ui/rating-stars';
import { WithLoader } from '@/shared/hoc';

//@TODO: Add ReviewForm submit handler
const OfferPage = (): JSX.Element => {
  const { id } = useParams() as { id: string };

  const { loading, error, data } = useLoadOfferData(id);

  const sendReview = useSendReview(id);
  const forceUpdate = useForceUpdate();

  let offer, offersNearby, reviews;

  if (data !== null) {
    [offer, offersNearby, reviews] = data;
    offersNearby = offersNearby.slice(0, 3);
  }

  if (error) {
    return <div>{error.name}</div>;
  }

  const handleSendReview = ({
    text,
    rating,
  }: {
    text: string;
    rating: number;
  }) => {
    sendReview({ comment: text, rating }).then(forceUpdate);
  };

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <WithLoader isLoading={loading}>
          {offer && offersNearby && reviews && (
            <section className="offer">
              <Gallery images={offer.images} />
              <div className="offer__container container">
                <div className="offer__wrapper">
                  {offer.isPremium && (
                    <div className="offer__mark">
                      <span>Premium</span>
                    </div>
                  )}
                  <div className="offer__name-wrapper">
                    <h1 className="offer__name">{offer.title}</h1>
                    <button
                      className="offer__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="offer__bookmark-icon"
                        width="31"
                        height="33"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <RatingStars value={offer.rating} kind="offer" />
                  <Features
                    adults={offer.maxAdults}
                    bedrooms={offer.bedrooms}
                    type={offer.type}
                  />
                  <div className="offer__price">
                    <b className="offer__price-value">&euro;{offer.price}</b>
                    <span className="offer__price-text">&nbsp;night</span>
                  </div>
                  <Goods goods={offer.goods} />
                  <Host host={offer.host} description={offer.description} />

                  <section className="offer__reviews reviews">
                    <h2 className="reviews__title">
                      Reviews &middot;{' '}
                      <span className="reviews__amount">{reviews.length}</span>
                    </h2>
                    <ReviewsList reviews={reviews} />
                    <WithPrivate>
                      <SendReviewForm onSubmit={handleSendReview} />
                    </WithPrivate>
                  </section>
                </div>
              </div>

              <Map
                kind="offer"
                city={offer.city}
                points={offersNearby}
                selectedPoint={offer}
              />
              <section className="container">
                <section className="near-places places">
                  <h2 className="near-places__title">
                    Other places in the neighbourhood
                  </h2>
                  <OffersList kind="nearby" offers={offersNearby} />
                </section>
              </section>
            </section>
          )}
        </WithLoader>
      </main>
    </div>
  );
};

export default OfferPage;
