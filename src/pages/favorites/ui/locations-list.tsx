import { OfferType, OffersList, OfferCard } from '../../../entities/offer';
import { FavoriteButton } from '../../../features/favorites/toggle';

type LocationsListPropsType = {
  locations: Record<string, OfferType[]>;
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
              <OffersList
                kind="favorites"
                offers={offers}
                renderCard={(offer) => (
                  <OfferCard
                    key={offer.id}
                    kind="favorites"
                    offer={offer}
                    favoriteButton={
                      <FavoriteButton
                        id={offer.id}
                        isFavorite={offer.isFavorite}
                      />
                    }
                  />
                )}
              />
            </div>
          </li>
        </ul>
      ))}
  </section>
);
