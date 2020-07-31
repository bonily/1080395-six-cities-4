import * as React from "react";
import * as renderer from "react-test-renderer";
import NewReview from "./new-review";
import {noop} from "../../common";

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
        raiting={initualState.raiting}
        comment={initualState.comment}
        onRaitingCheckboxChange={noop}
        onCommentChange={noop}
        onReviewFormSubmit = {noop}
        isFormSubmiting={false}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
