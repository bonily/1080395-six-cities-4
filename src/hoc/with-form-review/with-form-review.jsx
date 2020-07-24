import React from "react";
import PropTypes from "prop-types";

const withFormReview = (Component) => {
  class WithFormReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFormAble: false,
        isSubmitButtonAble: false,
        raiting: 0,
        comment: ``,
        isFormSubmiting: false,
      };

      this._handleRaitingChange =
        this._handleRaitingChange.bind(this);

      this._handleCommentChange =
        this._handleCommentChange.bind(this);

      this._checkIsFormCorrect =
        this._checkIsFormCorrect.bind(this);

      this._handleFormSubmit =
        this._handleFormSubmit.bind(this);

      this._resetForm = this._resetForm.bind(this);

      this._blockForm = this._blockForm.bind(this);
    }

    _handleRaitingChange(value) {
      this.setState(
          () => ({raiting: value})
      );
      this._checkIsFormCorrect({rating: value});
    }

    _handleCommentChange(value) {
      this.setState(
          () => ({comment: value})
      );
      this._checkIsFormCorrect({comment: value});
    }

    _checkIsFormCorrect({rating = this.state.raiting, comment = this.state.comment}) {
      if (rating > 0 && comment.length > 50) {
        this.setState(
            () => ({isFormAble: true})
        );
      } else {
        this.setState(
            () => ({isFormAble: false})
        );
      }
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      const {onReviewFormSubmit, id} = this.props;

      onReviewFormSubmit({
        comment: this.state.comment,
        rating: this.state.raiting
      }, id, this._resetForm, this._blockForm);
    }

    _blockForm() {
      this.setState(
          (prevState) => ({
            isFormSubmiting: !prevState.isFormSubmiting,
            isFormAble: !prevState.isFormAble
          })
      );
    }

    _resetForm() {
      this.setState(
          () => ({
            raiting: ``,
            comment: ``,
            isFormAble: false
          })
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          isFormAble={this.state.isFormAble}
          isSubmitButtonAble={this.state.isSubmitButtonAble}
          raiting={this.state.raiting}
          comment={this.state.comment}
          onRaitingCheckboxChange={this._handleRaitingChange}
          onCommentChange={this._handleCommentChange}
          onReviewFormSubmit = {this._handleFormSubmit}
          isFormSubmiting={this.state.isFormSubmiting}
        />
      );
    }
  }

  WithFormReview.propTypes = {
    onReviewFormSubmit: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  };
  return WithFormReview;
};

export default withFormReview;
