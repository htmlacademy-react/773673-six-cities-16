import { useState } from 'react';
import cn from 'classnames';

const sortingTypes = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

export const SortingTypes = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [sortingType, setSortingType] =
    useState<(typeof sortingTypes)[number]>('Popular');

  const handleChangeIsOpened = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleChangeIsOpened}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options places__options--custom ', {
          'places__options--opened': isOpened,
        })}
      >
        <li className="places__option places__option--active" tabIndex={0}>
          Popular
        </li>
        <li className="places__option" tabIndex={0}>
          Price: low to high
        </li>
        <li className="places__option" tabIndex={0}>
          Price: high to low
        </li>
        <li className="places__option" tabIndex={0}>
          Top rated first
        </li>
      </ul>
    </form>
  );
};
