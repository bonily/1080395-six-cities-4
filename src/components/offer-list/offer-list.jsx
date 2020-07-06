import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      idCard: null
    };

    this._handleCardHover = this._handleCardHover.bind(this);
  }

  render() {
    const {className, offers, onOfferTitleClick, onCardHoverOn, onCardHoverOff} = this.props;

    return (
      <div className={`${className}__places-list places__list tabs__content`}>
        {offers.map((offer) => (
          <OfferCard
            className = {className}
            offer = {offer}
            onOfferTitleClick = {onOfferTitleClick}
            onCardHover = {this._handleCardHover}
            key = {offer.id}
            onCardHoverOn = {onCardHoverOn}
            onCardHoverOff = {onCardHoverOff}
          />
        ))}
      </div>
    );
  }

  _handleCardHover(id) {
    this.setState({
      idCard: id
    });
  }
}


OfferList.propTypes = {
  className: PropTypes.string.isRequired,
  onCardHoverOn: PropTypes.func.isRequired,
  onCardHoverOff: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  ).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired
};

export default OfferList;
