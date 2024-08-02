type LocationsTitlePropsType = {
  offersCount: number;
  city: string;
};

export const LocationsTitle = ({
  offersCount,
  city,
}: LocationsTitlePropsType) => (
  <b className="places__found">
    {offersCount} places to stay in {city}
  </b>
);
