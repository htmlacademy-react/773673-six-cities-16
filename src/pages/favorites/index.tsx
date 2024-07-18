import { OfferType } from '../../entities/offer';
import { Footer } from '../../shared/ui';
import { LocationsList } from './ui/locations-list';

interface IProps {
  offersList: OfferType[];
}

type CitiesMap = Record<string, OfferType[]>;

export const Favorites = ({ offersList }: IProps) => {
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
          <LocationsList locations={citiesMap} />
        </div>
      </main>
      <Footer />
    </div>
  );
};
