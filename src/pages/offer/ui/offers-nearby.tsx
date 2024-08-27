import { OffersList } from '@/components/offers-list';
import { OfferExtended } from '@/types/offer-extended';
import { FC } from 'react';
import { useLoadOffersNearby } from '@/hooks/offers';
import { Map as MapComponent } from '@/components/map';

type Props = {
  offer: OfferExtended;
};

export const OffersNearby: FC<Props> = ({ offer }) => {
  const { offersNearby } = useLoadOffersNearby(offer.id);

  const displayedOffers = offersNearby.slice(0, 3);
  const points = [...displayedOffers, offer];

  return (
    <>
      <MapComponent
        kind="offer"
        city={offer.city}
        points={points}
        selectedPoint={offer}
      />
      <section className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <OffersList kind="nearby" offers={displayedOffers} />
        </section>
      </section>
    </>
  );
};
