import { Offer } from '@/types/offer';

import { LocationsList } from './ui/locations-list';
import { Spinner } from '@/shared/ui';
import { useLoadFavorites } from '@/hooks/favorites';
import { EmptyFavorites } from './ui/empty-list';

type CitiesMap = Record<string, Offer[]>;

export const Favorites = () => {
  const { favorites, isLoading } = useLoadFavorites();

  if (isLoading) {
    return <Spinner />;
  }

  const citiesMap: CitiesMap = favorites.reduce((acc: CitiesMap, place) => {
    if (!acc[place.city.name]) {
      acc[place.city.name] = [];
    }

    acc[place.city.name].push(place);

    return acc;
  }, {});

  return (
    <div className="page">
      {Object.keys(citiesMap).length > 0 ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <LocationsList locations={citiesMap} />
          </div>
        </main>
      ) : (
        <EmptyFavorites />
      )}
    </div>
  );
};
