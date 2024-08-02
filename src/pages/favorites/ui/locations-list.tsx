import { OffersList } from '@/components/offers-list';
import { Offer } from '@/types/offer';

type LocationsListPropsType = {
  locations: Record<string, Offer[]>;
};

export const LocationsList = ({ locations }: LocationsListPropsType) => (
  <section className="favorites">
    <h1 className="favorites__title">Saved listing</h1>
    {Object.keys(locations).length > 0 &&
      Object.entries(locations).map(([city, offers]) => (
        <ul className="favorites__list" key={city}>
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
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
