import { useLocationsList } from './hooks/useLocationsList';

import { OffersList, OfferCard } from '../../entities/offer';
import { CityType } from '../../entities/city';

import { FavoriteButton } from '../../features/favorites/toggle';
import { Navigation } from './ui/navigation';
import { LocationsTitle } from './ui/locations-title';
import { PlacesSorting } from './ui/places-sorting';

import { Map } from '../../widgets/map';
import { Layout } from './ui/layout';

import { cities } from './consts';

export const Main = () => {
  const { currentCity, setCurrentCity, offers } = useLocationsList(cities);

  const offersCount = offers.length;

  const handleChangeCity = (city: CityType) => {
    setCurrentCity(city);
  };
  return (
    <Layout
      navigation={
        <Navigation
          cities={cities}
          currentCity={currentCity}
          onChangeCity={handleChangeCity}
        />
      }
      title={
        <LocationsTitle offersCount={offersCount} city={currentCity.name} />
      }
      sorting={<PlacesSorting />}
      offersList={
        <OffersList
          kind="cities"
          offers={offers}
          renderCard={(offer) => (
            <OfferCard
              key={offer.id}
              kind="cities"
              offer={offer}
              favoriteButton={<FavoriteButton id={offer.id} />}
            />
          )}
        />
      }
      map={<Map city={currentCity} points={offers} selectedPoint={offers[0]} />}
    />
  );
};
