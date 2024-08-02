import cn from 'classnames';

type Props = {
  id: string;
  isFavorite: boolean;
  onToggle: (id: string) => void;
};

export const FavoriteButton = ({ id, isFavorite, onToggle }: Props) => (
  <button
    onClick={() => onToggle(id)}
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
