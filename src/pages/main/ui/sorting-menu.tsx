import { useState } from 'react';
import cn from 'classnames';
import { SortingTypes } from '@/consts/sorting-types';

type SortingMenuProps = {
  currentSortingType: SortingTypes;
  onSortingTypeChanged: (sorting: SortingTypes) => void;
};

export const SortingMenu = ({
  onSortingTypeChanged,
  currentSortingType,
}: SortingMenuProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleChangeIsOpened = () => {
    setIsOpened((prevState) => !prevState);
  };

  const handleChangeSortingType = (sorting: SortingTypes) => {
    setIsOpened(false);
    onSortingTypeChanged(sorting);
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
        {Object.values(SortingTypes).map((sorting) => (
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
