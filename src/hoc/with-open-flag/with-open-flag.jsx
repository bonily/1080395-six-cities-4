import React from "react";

export const withOpenFlag = (Component) => {
  return class WithOpenFlag extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this._handleOpenChange =
        this._handleOpenChange.bind(this);
    }

    _handleOpenChange() {
      this.setState(
          (prevState) => ({isOpen: !prevState.isOpen})
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          isOpen={this.state.isOpen}
          onOpenChange={this._handleOpenChange}
        />
      );
    }
  };
};
