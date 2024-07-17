import { OfferExtendedType, OfferType } from '..';

export const offers: OfferType[] = [
  {
    id: '4da96d04-80de-4dc8-9149-2d8b5c6375e3',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'room',
    price: 299,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
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
    isFavorite: false,
    isPremium: true,
    rating: 3.8,
  },
  {
    id: '3d41c3ff-f268-4d2e-a31e-570cd2d68ad8',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 174,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
  },
  {
    id: '8b63eabd-f88c-40cd-a8de-e5204fd74a07',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 225,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2,
  },
  {
    id: 'e8761280-692d-4379-a69f-0d21f4b8298d',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 162,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4,
  },
];

export const offer: OfferExtendedType = {
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
  isFavorite: false,
  rating: 3.8,
  bedrooms: 1,
  maxAdults: 3,
};
