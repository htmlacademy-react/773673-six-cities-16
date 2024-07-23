export type OfferCardProps = {
  offer: {
    id: string;
    isPremium: boolean;
    isFavorite: boolean;
    previewImage: string;
    price: number;
    type: string;
    title: string;
    rating: number;
  };
};
