export const Features = ({
  bedrooms,
  adults,
  type,
}: {
  bedrooms: number;
  adults: number;
  type: string;
}) => (
  <ul className="offer__features">
    <li className="offer__feature offer__feature--entire">{type}</li>
    <li className="offer__feature offer__feature--bedrooms">
      {bedrooms} Bedrooms
    </li>
    <li className="offer__feature offer__feature--adults">
      Max {adults} adults
    </li>
  </ul>
);
