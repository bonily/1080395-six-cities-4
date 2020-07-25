import React from "react";

export const withFavoriteFlag = (Component) => {
  return class WithFavoriteFlag extends React.PureComponent {
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
  };
};
