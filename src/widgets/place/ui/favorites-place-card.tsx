import { Link } from 'react-router-dom';

import { OfferType } from '../../../entities/offer';
import { FavoriteButton } from '../../../features/favorites/favorite';

type FavoritesPlaceCardPropns = OfferType;

const FavoritesPlaceCard = (props: FavoritesPlaceCardPropns) => (
  <article className="favorites__card place-card">
    {props.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${props.id}`}>
        <img
          className="place-card__image"
          src={props.previewImage}
          width="150"
          height="110"
          alt="Place image"
        />
      </Link>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{props.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <FavoriteButton id={props.id} />
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
      <p className="place-card__type">{props.type}</p>
    </div>
  </article>
);

export default FavoritesPlaceCard;
