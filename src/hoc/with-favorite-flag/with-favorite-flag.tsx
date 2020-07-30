import * as React from "react";
import {Subtract} from "utility-types";
import {Offer} from "../../types";

interface State {
  isInBookmark: boolean,
}

interface Props {
  offer: Offer,
  nameClass: string,
  onCardHoverOn: (arg0: number) => void,
  onCardHoverOff: () => void,
  onOfferTitleClick: (arg0: number) => void,
  changeFavoriteStatus: () => void,
}



export const withFavoriteFlag = (Component) => {

  class WithFavoriteFlag extends React.PureComponent<Props, State> {
    offer: Offer;
    constructor(props) {
      super(props);

      this.offer = this.props.offer;

      this.state = {
        isInBookmark: this.offer.isInBookmark};

      this._handleFavoriteStatusChange =
        this._handleFavoriteStatusChange.bind(this);
    }

    _handleFavoriteStatusChange() {
      this.setState(
          (prevState) => ({isInBookmark: !prevState.isInBookmark})
      );
    }

    render() {
      console.log(this.props)
      return (
        <Component
          {...this.props}
          isInBookmark={this.state.isInBookmark}
          onFavoriteStatusChange={this._handleFavoriteStatusChange}
        />
      );
    }
  }

  return WithFavoriteFlag;
};
