import { cities } from '@/consts/cities';
import { NavLink } from 'react-router-dom';

export const CitiesList = () => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city.name} className="locations__item">
            <NavLink
              to={`/${city.name}`}
              className={({ isActive }) =>
                [
                  'locations__item-link',
                  'tabs__item',
                  isActive ? 'tabs__item--active' : '',
                ].join(' ')}
            >
              <span>{city.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  </div>
);
