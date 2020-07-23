import React from "react";
import renderer from "react-test-renderer";
import NewReview from "./new-review";

const initualState = {
  isFormAble: false,
  isSubmitButtonAble: false,
  raiting: 0,
  comment: ``,
  isFormSubmiting: false,
};

describe(`NewReviewSnapTest`, () => {
  it(`New review should render new review component`, () => {
    const tree = renderer
      .create(<NewReview
        isFormAble={initualState.isFormAble}
        isSubmitButtonAble={initualState.isSubmitButtonAble}
        raiting={initualState.raiting}
        comment={initualState.comment}
        onRaitingCheckboxChange={() => {}}
        onCommentChange={() => {}}
        onReviewFormSubmit = {() => {}}
        isFormSubmiting={false}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
