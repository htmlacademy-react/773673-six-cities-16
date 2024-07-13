import { useState } from 'react';

import { MainPlaceCard } from '.';
import { OfferType } from '../../../entities/offer';

interface IProps {
  offers: OfferType[];
}

const MainPlacesList = ({ offers }: IProps) => {
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
          onMouseEnter={selectCard}
          onMouseLeave={clearSelectedCard}
        />
      ))}
    </div>
  );
};
export default MainPlacesList;
