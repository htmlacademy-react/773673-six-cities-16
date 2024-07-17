import cn from 'classnames';
import { CityType } from '../../../entities/city';

type NavigationPropsType = {
  cities: CityType[];
  currentCity: CityType;
  onChangeCity: (city: CityType) => void;
};

export const Navigation = ({
  cities,
  currentCity,
  onChangeCity,
}: NavigationPropsType) => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <li key={city.name} className="locations__item">
        <a
          onClick={() => onChangeCity(city)}
          className={cn('locations__item-link tabs__item', {
            'tabs__item--active': city.name === currentCity.name,
          })}
          href="#"
        >
          <span>{city.name}</span>
        </a>
      </li>
    ))}
  </ul>
);
