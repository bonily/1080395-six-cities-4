import React from "react";
import PropTypes from "prop-types";
import HeaderBlock from "../header-block/header-block.jsx";
import OfferListSaved from "../offer-list-saved/offer-list-saved.jsx";


const UserPage = (props) => {
  const {offers, onOfferTitleClick, isLoginComplete, onUserBlockClick, name} = props;
  return (
    <div className="page">
      {<HeaderBlock
        isLoginComplete = {isLoginComplete}
        name = {name}
        onUserBlockClick = {onUserBlockClick}
      />}
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {<OfferListSaved
            offers = {offers}
            onOfferTitleClick = {onOfferTitleClick}
          />}
        </div>
      </main>
    </div>
  );
};

UserPage.propTypes = {
  offers: PropTypes.objectOf(PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      }).isRequired)
  ).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  isLoginComplete: PropTypes.bool.isRequired,
  onUserBlockClick: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default UserPage;
