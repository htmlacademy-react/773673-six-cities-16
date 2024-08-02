import { useState } from 'react';
import cn from 'classnames';

const sortingTypes = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

type SortingType = (typeof sortingTypes)[number];

export const SortingTypes = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentSortingType, setCurrentSortingType] =
    useState<SortingType>('Popular');

  const handleChangeIsOpened = () => {
    setIsOpened((prevState) => !prevState);
  };

  const handleChangeSortingType = (sorting: SortingType) => {
    setCurrentSortingType(sorting);
    setIsOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleChangeIsOpened}
      >
        {currentSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options places__options--custom ', {
          'places__options--opened': isOpened,
        })}
      >
        {sortingTypes.map((sorting) => (
          <li
            onClick={() => handleChangeSortingType(sorting)}
            key={sorting}
            className={cn('places__option', {
              'places__option--active': sorting === currentSortingType,
            })}
            tabIndex={0}
          >
            {sorting}
          </li>
        ))}
      </ul>
    </form>
  );
};
