import React from "react";
import renderer from "react-test-renderer";
import {NewReview} from "./new-review";

describe(`NewReviewSnapTest`, () => {
  it(`New review should render new review component`, () => {
    const tree = renderer
      .create(<NewReview
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
