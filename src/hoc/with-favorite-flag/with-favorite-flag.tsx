import * as React from "react";
import {Offer} from "../../types";


interface State {
  isInBookmark: boolean;
}

interface Props {
  onFavoriteStatusChange: () => void;
}

export const withFavoriteFlag = (Component) => {
  type P = React.ComponentProps<typeof Component>;

  class WithFavoriteFlag extends React.PureComponent<P, State, Props> {
    offer: Offer
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
