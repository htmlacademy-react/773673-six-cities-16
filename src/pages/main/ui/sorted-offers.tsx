import { OffersList } from '@/components/offers-list';
import { SortingMenu } from './sorting-menu';
import { FC, PropsWithChildren } from 'react';
import { Offer } from '@/types/offer';
import { useSortOffers } from '@/hooks/offers';
import { SortingTypes } from '@/consts/sorting-types';

type Props = PropsWithChildren<{
  offers: Offer[];
  onOfferHoverd: (offer: Offer) => void;
  onOfferUnhoverd: () => void;
}>;

export const SortedOffers: FC<Props> = ({
  children,
  offers,
  onOfferHoverd,
  onOfferUnhoverd,
}) => {
  const [sortedOffers, sortingType, changeSortingType] = useSortOffers(
    offers,
    offers,
  );

  const handleSortingTypeChanged = (type: SortingTypes) => {
    changeSortingType(type);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      {children}
      <SortingMenu
        currentSortingType={sortingType}
        onSortingTypeChanged={handleSortingTypeChanged}
      />
      <OffersList
        kind="cities"
        offers={sortedOffers}
        onOfferSelected={onOfferHoverd}
        onOfferUnselected={onOfferUnhoverd}
      />
    </section>
  );
};
