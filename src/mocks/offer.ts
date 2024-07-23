import { OfferExtended } from '../types/offer-extended';

export const offer: OfferExtended = {
  id: 'ec59f38a-4262-45e6-8e1a-8ffeb953971a',
  title: 'The Joshua Tree House',
  description:
    'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
  type: 'room',
  price: 169,
  images: [
    'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16,
  },
  goods: [
    'Towels',
    'Washing machine',
    'Washer',
    'Baby seat',
    'Cable TV',
    'Heating',
    'Breakfast',
    'Air conditioning',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl:
      'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: true,
  rating: 3.8,
  bedrooms: 1,
  maxAdults: 3,
};
