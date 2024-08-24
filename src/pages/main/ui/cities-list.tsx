import { cities } from '@/consts/cities';
import { useCitiesNavigation } from '@/hooks/citites';
import { City } from '@/types/city';
import cn from 'classnames';

export const CitiesList = () => {
  const { currentCity, changeCity } = useCitiesNavigation();

  const handleCityChanged = (event: React.MouseEvent, city: City) => {
    event.preventDefault();
    changeCity(city);
  };

  return (
    <div className="tabs">
      <section className="locations container">
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
      </section>
    </div>
  );
};
