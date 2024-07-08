import { useState } from 'react';
import { Offer } from '../../types/offer';
import { MainPlaceCard } from '../place-card';

interface IProps {
  offers: Offer[];
}

const OffersList = ({ offers }: IProps) => {
  //eslint-disable-next-line
  const [, setSelectedCard] = useState<string | null>(null);

  const selectCard = (id: string) => {
    setSelectedCard(id);
  };

  const clearSelectedCard = () => setSelectedCard(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <MainPlaceCard
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
