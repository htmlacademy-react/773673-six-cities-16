import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';

import { Features } from './ui/features';
import { Gallery } from './ui/gallery';
import { Goods } from './ui/goods';
import { Host } from './ui/host';

import { RatingStars } from '@/shared/ui/rating-stars';
import { Spinner } from '@/shared/ui';

import NotFound from '../not-found';
import { OfferReviews } from './ui/offer-reviews';
import { useToggleFavorite } from '@/hooks/favorites';
import { OffersNearby } from './ui/offers-nearby';
import { useLoadOfferById } from '@/hooks/offers';

const OfferPage: FC = () => {
  const { id } = useParams() as { id: string };

  const { offer, loading, error } = useLoadOfferById(id);

  const [isFavorite, setIsFavorite] = useState<boolean>(
    offer?.isFavorite || false,
  );

  const toggleFavorite = useToggleFavorite(offer);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toggleFavorite();
  };

  if (error) {
    return <NotFound />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        {offer && (
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
                    onClick={handleFavorite}
                    className={cn('offer__bookmark-button button', {
                      'offer__bookmark-button--active': isFavorite,
                    })}
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
            <OffersNearby offer={offer} />
          </section>
        )}
      </main>
    </div>
  );
};

export default OfferPage;
