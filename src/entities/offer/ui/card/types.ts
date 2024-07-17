import { ReactNode } from 'react';

export type OfferCardPropsType = {
  offer: {
    id: string;
    isPremium: boolean;
    previewImage: string;
    price: number;
    type: string;
    title: string;
    rating: number;
  };
  favoriteButton: ReactNode;
};
