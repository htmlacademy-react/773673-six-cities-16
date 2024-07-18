import { SendReviewForm } from '../../features/review/send';
import { FavoriteButton } from '../../features/favorites/toggle';

import { offer, offers } from '../../entities/offer/mock/offers';
import { OffersList, OfferCard } from '../../entities/offer';

import comments from '../../entities/review/api/mock';
import ReviewsList from '../../entities/review/ui/reviews-list';

import { RatingStars } from '../../shared/ui/rating-stars';

import { Features } from './ui/features';
import { Gallery } from './ui/gallery';
import { Goods } from './ui/goods';
import { Host } from './ui/host';
import { Map } from '../../widgets/map';

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
                <span className="reviews__amount">{comments.length}</span>
              </h2>
              <ReviewsList reviews={comments} />
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
          <OffersList
            kind="nearby"
            offers={offers}
            renderCard={(item) => (
              <OfferCard
                key={item.id}
                kind="nearby"
                offer={item}
                favoriteButton={<FavoriteButton id={item.id} />}
              />
            )}
          />
        </section>
      </div>
    </main>
  </div>
);

export default OfferPage;
