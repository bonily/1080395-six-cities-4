import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const numbers = [5, 4, 3, 2, 1];

class NewReview extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {raiting, onRaitingCheckboxChange, comment, onCommentChange, isFormAble, onReviewFormSubmit, isFormSubmiting} = this.props;
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={onReviewFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {numbers.map((i) => {
            const value = i;
            return (
              <React.Fragment key={i}>
                <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked= {raiting === value ? `checked` : ``} onChange={() => onRaitingCheckboxChange(value)} disabled={isFormSubmiting ? `disabled` : ``}/>
                <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          }
          )}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment} onChange={(evt) => onCommentChange(evt.target.value)} disabled={isFormSubmiting ? `disabled` : ``} minLength="50" maxLength="350" ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isFormAble ? `` : `disabled`}>Submit</button>
        </div>
      </form>
    );
  }
}


NewReview.propTypes = {
  raiting: PropTypes.number.isRequired,
  onRaitingCheckboxChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  isFormAble: PropTypes.bool.isRequired,
  onReviewFormSubmit: PropTypes.func.isRequired,
  isFormSubmiting: PropTypes.bool.isRequired
};

export default NewReview;
