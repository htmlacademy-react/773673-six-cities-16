import { OffersList } from '@/components/offers-list';
import { ROUTE_PATHS } from '@/consts/routes';
import { Offer } from '@/types/offer';
import { Link } from 'react-router-dom';

type LocationsListPropsType = {
  locations: Record<string, Offer[]>;
};

export const LocationsList = ({ locations }: LocationsListPropsType) => (
  <section className="favorites">
    <h1 className="favorites__title">Saved listing</h1>
    {Object.entries(locations).map(([city, offers]) => (
      <ul className="favorites__list" key={city}>
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={ROUTE_PATHS.MAIN}>
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            <OffersList kind="favorites" offers={offers} />
          </div>
        </li>
      </ul>
    ))}
  </section>
);
