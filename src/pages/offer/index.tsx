import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { OffersList } from '@/components/offers-list';
import { Map } from '@/components/map';

import { Features } from './ui/features';
import { Gallery } from './ui/gallery';
import { Goods } from './ui/goods';
import { Host } from './ui/host';

import { useLoadOfferData } from '@/hooks/use-load-offer-data';

import { RatingStars } from '@/shared/ui/rating-stars';
import { Spinner } from '@/shared/ui';

import NotFound from '../not-found';
import { OfferReviews } from './ui/offer-reviews';

const OfferPage: FC = () => {
  const { id } = useParams() as { id: string };

  const { loading, error, offer, offersNearby } = useLoadOfferData(id);

  if (error) {
    return <NotFound />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        {offer && offersNearby && (
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

                <OfferReviews id={id} />
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
      </main>
    </div>
  );
};

export default OfferPage;
