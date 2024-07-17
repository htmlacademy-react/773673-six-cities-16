import { Link } from 'react-router-dom';
import { OfferCardPropsType } from './types';

export const FavoritesOfferCard = ({
  offer,
  favoriteButton,
}: OfferCardPropsType) => (
  <article className="favorites__card place-card">
    {offer.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${offer.id}`}>
        <img
          className="place-card__image"
          src={offer.previewImage}
          width="150"
          height="110"
          alt="Place image"
        />
      </Link>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        {favoriteButton}
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: '100%' }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">Nice, cozy, warm big bed apartment</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);
