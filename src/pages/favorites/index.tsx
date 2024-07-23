import { Offer } from '@/types/offer';

import { LocationsList } from './ui/locations-list';
import Footer from '@/components/footer';

interface IProps {
  offersList: Offer[];
}

type CitiesMap = Record<string, Offer[]>;

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
