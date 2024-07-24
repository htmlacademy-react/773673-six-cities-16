import { City } from '@/types/city';
import { Offer } from '@/types/offer';

const isDate = (date: unknown): date is Date => date instanceof Date;

export const formatDate = (date: string | Date): string => {
  const dateInstance = isDate(date) ? date : new Date(date);

  const [month, day, year] = [
    (dateInstance.getMonth() + 1).toString().padStart(2, '0'),
    dateInstance.getDate(),
    dateInstance.getFullYear(),
  ];

  return [year, month, day].join('-');
};

export const offersToLocationsList = (cities: City[], offersList: Offer[]) =>
  cities.reduce((acc, current) => {
    const offersByCity = offersList.filter(
      ({ city }) => city.name === current.name,
    );
    acc.set(current, offersByCity);

    return acc;
  }, new Map<City, Offer[]>());
