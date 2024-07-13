import { useState } from 'react';

import { MainPlaceCard } from '.';
import { OfferType } from '../../../entities/offer';

interface IProps {
  offers: OfferType[];
}

const MainPlacesList = ({ offers }: IProps) => {
  const [, setSelectedCard] = useState<string | null>(null);

  const handleSelectCard = (id: string) => {
    setSelectedCard(id);
  };

  const handleClearSelectedCard = () => setSelectedCard(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <MainPlaceCard
          key={offer.id}
          {...offer}
          onSelectCard={handleSelectCard}
          onClearSelectedCard={handleClearSelectedCard}
        />
      ))}
    </div>
  );
};
export default MainPlacesList;
