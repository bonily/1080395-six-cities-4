import * as React from "react";
import {COMMENT_LENGTH} from "../../const";


interface Props {
  comment: string;
  isFormAble: boolean;
  isFormSubmiting: boolean;
  raiting: number;
  onCommentChange: (string) => void;
  onReviewFormSubmit: () => void;
  onRaitingCheckboxChange: (number) => void;
}

const STARS = [5, 4, 3, 2, 1];

const NewReview: React.FunctionComponent<Props> = (props: Props) => {

  const {raiting, comment, isFormAble, isFormSubmiting, onRaitingCheckboxChange, onReviewFormSubmit, onCommentChange} = props;
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onReviewFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STARS.map((i) => {
          const value = i;
          return (
            <React.Fragment key={i}>
              <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked= {raiting === value ? true : false} onChange={() => onRaitingCheckboxChange(value)} disabled={isFormSubmiting ? true : false}/>
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
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment} onChange={(evt) => onCommentChange(evt.target.value)} disabled={isFormSubmiting ? true : false} minLength={COMMENT_LENGTH.MIN_LENGTH} maxLength={COMMENT_LENGTH.MAX_LENGTH} ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isFormAble ? false : true}>Submit</button>
      </div>
    </form>
  );
};


export default NewReview;
