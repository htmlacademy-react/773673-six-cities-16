import { City } from '@/types/city';

type EmptyLocationProps = { city: City };

export const EmptyLocation = ({ city }: EmptyLocationProps) => (
  <div className="cities__places-container cities__places-container--empty container">
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">
          We could not find any property available at the moment in {city.name}
        </p>
      </div>
    </section>
    <div className="cities__right-section">
      <section className="cities__map map"></section>
    </div>
  </div>
);
