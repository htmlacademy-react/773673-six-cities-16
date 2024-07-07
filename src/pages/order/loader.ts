import { LoaderFunctionArgs } from 'react-router-dom';

import offers from '../../mocks/offers';

import { OfferRespone } from '../../types/offers';

export const offerIdLoader = ({ params }: LoaderFunctionArgs) =>
  offers.find((offer) => offer.id === params.id) as OfferRespone;
