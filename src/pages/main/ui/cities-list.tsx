import { City } from '@/types/city';
import cn from 'classnames';

type NavigationPropsType = {
  cities: City[];
  currentCity: City;
  onCityChanged: (city: City) => void;
};

export const CitiesList = ({
  cities,
  currentCity,
  onCityChanged: onChangeCity,
}: NavigationPropsType) => {
  const handleCityChanged = (event: React.MouseEvent, city: City) => {
    event.preventDefault();
    onChangeCity(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.name} className="locations__item">
          <a
            onClick={(event) => handleCityChanged(event, city)}
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
};
