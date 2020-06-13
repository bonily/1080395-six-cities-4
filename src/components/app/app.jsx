import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const offerTitleHandler = (evt) => {
  evt.preventDefault();
  console.log(`Меня кликнули`);
};

const App = (props) => {
  const {offersCount, offers} = props;

  return (
    <Main
      offersCount = {offersCount}
      offers = {offers}
      onOfferTitleClick = {offerTitleHandler}
    />
  );
};


App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  ).isRequired,
};

export default App;
