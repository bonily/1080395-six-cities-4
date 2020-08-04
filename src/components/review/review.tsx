import * as React from "react";
import {MAX_STAR_COUNT} from "../../const.js";
import {Review as ReviewProps} from "../../types";


interface Props {
  review: ReviewProps;
}

const Months = {
  1: `January`,
  2: `February`,
  3: `March`,
  4: `April`,
  5: `May`,
  6: `June`,
  7: `July`,
  8: `August`,
  9: `September`,
  10: `October`,
  11: `November`,
  12: `December`
};

const createDateFormatForReview = (date) => {

  const newDate = new Date(date);
  const month = Months[newDate.getMonth() + 1];


  return `${month} ${newDate.getUTCFullYear()}`;
};

const Review: React.FunctionComponent<Props> = (props: Props) => {
  const {review} = props;
  const {user, rating, comment, date} = review;

  const raitingStarPercent = (Math.round(rating) / MAX_STAR_COUNT * 100) + `%`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: raitingStarPercent}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{createDateFormatForReview(date)}</time>
      </div>
    </li>
  );
};


export default Review;
