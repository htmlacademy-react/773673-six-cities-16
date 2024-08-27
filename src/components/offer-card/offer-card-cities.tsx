import { Link } from 'react-router-dom';
import { RatingStars } from '@/shared/ui/rating-stars';
import { OfferCardProps } from './types';
import { FavoriteButton } from '../toggle-favorite-button';
import { Offer } from '@/types/offer';
import { useToggleFavorite } from '@/hooks/favorites';

type Props = OfferCardProps & {
  onOfferSelected: ((offer: Offer) => void) | undefined;
  onOfferUnselected: (() => void) | undefined;
};

export const CitiesOfferCard = ({
  onOfferSelected,
  onOfferUnselected,
  offer,
}: Props) => {
  const toggleFavorite = useToggleFavorite(offer);

  const handleMouseEnter = (offerItem: Offer) => {
    onOfferSelected?.(offerItem);
  };
  const handleMouseLeave = () => {
    onOfferUnselected?.();
  };

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => handleMouseEnter(offer)}
      onMouseLeave={() => handleMouseLeave()}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
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
          <FavoriteButton
            isFavorite={offer.isFavorite}
            onToggle={toggleFavorite}
          />
        </div>
        <RatingStars value={offer.rating} kind="place" />
        <h2 className="place-card__name">
          <Link to={`/offers/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};
