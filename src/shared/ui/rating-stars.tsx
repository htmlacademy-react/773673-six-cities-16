const valueToWidth = (value: number) => value * 20;

export const RatingStars = ({
  value,
  kind,
}: {
  value: number;
  kind: 'offer' | 'review' | 'place';
}) => {
  const prefixMap = {
    review: 'reviews',
    place: 'place-card',
    offer: 'offer',
  };

  const classPrefix = prefixMap[kind];
  const calculatedWidth = valueToWidth(value);

  return (
    <div className={`${classPrefix}__rating rating`}>
      <div className={`${classPrefix}__stars rating__stars`}>
        <span style={{ width: `${calculatedWidth}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {kind === 'offer' && (
        <span className={`${classPrefix}__rating-value rating__value`}>
          {value}
        </span>
      )}
    </div>
  );
};
