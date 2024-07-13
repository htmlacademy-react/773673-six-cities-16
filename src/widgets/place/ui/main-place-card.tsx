import { Link } from 'react-router-dom';

import { type OfferType } from '../../../entities/offer';
import { FavoriteButton } from '../../../features/favorites/favorite';

export type MainPlaceCardProps = OfferType & {
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
};

const MainPlaceCard = (props: MainPlaceCardProps) => (
  <article
    className="cities__card place-card"
    onMouseOver={() => props.onMouseEnter(props.id)}
    onMouseOut={props.onMouseLeave}
  >
    {props.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${props.id}`}>
        <img
          className="place-card__image"
          src={props.previewImage}
          width="260"
          height="200"
          alt="Place image"
        />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{props.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <FavoriteButton id={props.id} />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: '80%' }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offers/${props.id}`}>{props.title}</Link>
      </h2>
      <p className="place-card__type">{props.type}</p>
    </div>
  </article>
);

export default MainPlaceCard;
