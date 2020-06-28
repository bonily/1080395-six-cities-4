import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";


const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        return (
          <Review
            key={review.id }
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
          url: PropTypes.string.isRequired
        }).isRequired,
        raiting: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired
};

export default ReviewsList;
