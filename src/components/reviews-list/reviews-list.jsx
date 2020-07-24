import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";

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

const ReviewsList = (props) => {
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

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.shape({
          name: PropTypes.string.isRequired,
          avatarUrl: PropTypes.string.isRequired
        }).isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired
};

export default ReviewsList;
