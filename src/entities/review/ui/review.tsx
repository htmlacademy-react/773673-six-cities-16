import { type ReviewType } from '..';
import { formatDate } from '../../../shared/lib';

type PropsType = ReviewType;

const Review = (props: PropsType) => {
  const formattedDate = formatDate(props.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={props.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{props.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{props.comment}</p>
        <time className="reviews__time" dateTime={formattedDate}>
          {new Date(props.date).toDateString()}
        </time>
      </div>
    </li>
  );
};

export default Review;
