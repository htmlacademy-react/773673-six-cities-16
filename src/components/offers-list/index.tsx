import { useState } from 'react';

import PlaceCard from '../place-card';

import { OfferRespone } from '../../types/offers';

interface IProps {
  offers: OfferRespone[];
}

const OffersList = ({ offers }: IProps) => {
  //eslint-disable-next-line
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const selectCard = (id: string) => {
    setSelectedCard(id);
  };

  const clearSelectedCard = () => setSelectedCard(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          {...offer}
          onMouseOver={selectCard}
          onMouseLeave={clearSelectedCard}
        />
      ))}
    </div>
  );
};
export default OffersList;
