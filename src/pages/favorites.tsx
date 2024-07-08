import { OfferType } from '../entities/offer';
import { FavoritesPlaceCard } from '../widgets/place';

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
            {
              //@TODO: add checking for empty cities and offers list
              citiesMap &&
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
                        {offers.map((offer) => (
                          <FavoritesPlaceCard key={offer.id} {...offer} />
                        ))}
                      </div>
                    </li>
                  </ul>
                ))
            }
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
};
export default Favorites;
