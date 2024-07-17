import { OfferCard, OfferType, OffersList } from '../entities/offer';
import { FavoriteButton } from '../features/favorites/toggle';

import { Footer } from '../shared/ui';

interface IProps {
  offersList: OfferType[];
}

type CitiesMap = Record<string, OfferType[]>;

const Favorites = ({ offersList }: IProps) => {
  const citiesMap: CitiesMap = offersList.reduce((acc: CitiesMap, place) => {
    if (!acc[place.city.name]) {
      acc[place.city.name] = [];
    }

    acc[place.city.name].push(place);

    return acc;
  }, {});

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {Object.keys(citiesMap).length > 0 &&
              Object.entries(citiesMap).map(([city, offers]) => (
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
                            kind="favorites"
                            offer={offer}
                            favoriteButton={<FavoriteButton id={offer.id} />}
                          />
                        )}
                      />
                    </div>
                  </li>
                </ul>
              ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Favorites;
