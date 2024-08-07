import { OffersList } from '@/components/offers-list';
import ReviewsList from '@/components/reviews-list';
import { SendReviewForm } from '@/components/send-review-form/form';
import { Map } from '@/components/map';

import { offer } from '@/mocks/offer';
import { offers } from '@/mocks/offers';
import reviews from '@/mocks/mock';

import { Features } from './ui/features';
import { Gallery } from './ui/gallery';
import { Goods } from './ui/goods';
import { Host } from './ui/host';

import { RatingStars } from '@/shared/ui/rating-stars';

//@TODO: Add ReviewForm submit handler
const OfferPage = (): JSX.Element => (
  <div className="page">
    <main className="page__main page__main--offer">
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
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
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
              <SendReviewForm id={offer.id} />
            </section>
          </div>
        </div>

        <Map
          kind="offer"
          city={offer.city}
          points={offers}
          selectedPoint={offer}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <OffersList kind="nearby" offers={offers} />
        </section>
      </div>
    </main>
  </div>
);

export default OfferPage;
