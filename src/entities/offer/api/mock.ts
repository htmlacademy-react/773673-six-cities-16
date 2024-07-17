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
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  description:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: ['Heating'],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'https://url-to-image/image.png',
    isPro: false,
  },
  images: ['https://url-to-image/image.png'],
  maxAdults: 4,
};
