import { Link } from 'react-router-dom';
import { OfferCardProps } from './types';
import { RatingStars } from '../../shared/ui/rating-stars';

export const OfferCardNearby = ({ offer, favoriteButton }: OfferCardProps) => (
  <article className="near-places__card place-card">
    {offer.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="near-places__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${offer.id}`}>
        <img
          className="place-card__image"
          src={offer.previewImage}
          width="260"
          height="200"
          alt="Place image"
        />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        {favoriteButton}
      </div>
      <RatingStars value={offer.rating} kind="place" />
      <h2 className="place-card__name">
        <Link to={`/offers/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);
