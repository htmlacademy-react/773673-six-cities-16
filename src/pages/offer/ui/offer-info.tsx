import { FC } from 'react';
import { OfferExtended } from '@/types/offer-extended';

type Props = {
  offer: OfferExtended;
};

export const OfferInfo: FC<Props> = ({ offer }) =>
