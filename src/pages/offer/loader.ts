import { LoaderFunctionArgs } from 'react-router-dom';

import { OfferType } from '../../entities/offer';

import offers from '../../entities/offer/api/mock';
import comments from '../../entities/review/api/mock';

export const offerDataLoader = ({ params }: LoaderFunctionArgs) => {
  const targetOffer = offers.find(
    (offer) => offer.id === params.id,
  ) as OfferType;
  return {
    offer: targetOffer,
    comments,
  };
};
