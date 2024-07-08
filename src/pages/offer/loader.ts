import { LoaderFunctionArgs } from 'react-router-dom';

import { Offer } from '../../types/offer';

import offers from '../../mocks/offer';
import comments from '../../mocks/comment';

export const offerDataLoader = ({ params }: LoaderFunctionArgs) => {
  const targetOffer = offers.find((offer) => offer.id === params.id) as Offer;
  return {
    offer: targetOffer,
    comments,
  };
};
