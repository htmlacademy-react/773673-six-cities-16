import cn from 'classnames';

import { addToFavorites } from '../model';

type PropsType = {
  id: string;
  isFavorite: boolean;
};

const FavoriteButton = ({ id, isFavorite }: PropsType) => (
  <button
    onClick={() => addToFavorites(id)}
    className={cn('place-card__bookmark-button button', {
      'place-card__bookmark-button--active': isFavorite,
    })}
    type="button"
  >
    <svg className="place-card__bookmark-icon" width="18" height="19">
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
    <span className="visually-hidden">To bookmarks</span>
  </button>
);

export default FavoriteButton;
