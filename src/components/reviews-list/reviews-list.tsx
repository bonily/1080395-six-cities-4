import * as React from "react";
import Review from "../review/review";
import {Review as ReviewProps} from "../../types";


interface Props {
  reviews: ReviewProps[];
};


const sortReviews = (reviews) => {
  return reviews.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });
};

const ReviewsList: React.FunctionComponent<Props> = (props: Props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {sortReviews(reviews).map((review) => {
        return (
          <Review
            key={review.id}
            review = {review}
          />);
      })}
    </ul>
  );
};


export default ReviewsList;
