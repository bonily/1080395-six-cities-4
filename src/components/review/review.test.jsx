import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";


const REVIEW = {
  user: {
    name: `Max`,
    avatarUrl: `img/avatar-max.jpg`,
    rating: 4
  },
  rating: 4,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  date: `2019-04-24`,
  id: 1,
};

describe(`ReviewSnapTest`, () => {
  it(`Review should render the review block in the list`, () => {
    const tree = renderer
    .create(<Review
      review = {REVIEW}
    />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
