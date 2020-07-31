import * as React from "react";
import * as renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";
import {Review} from "../../types";


const reviews: Review[] = [
  {
    user: {
      name: `Max`,
      avatarUrl: `img/avatar-max.jpg`,
      rating: 3
    },
    rating: 4,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`,
    id: 1,
  },
  {
    user: {
      name: `Igor`,
      avatarUrl: `img/avatar-max.jpg`,
      rating: 9
    },
    rating: 3,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-06-21`,
    id: 2,
  }
];

describe(`ReviewsListSnapTest`, () => {
  it(`ReviewsList should render list of reviews`, () => {
    const tree = renderer
      .create(<ReviewsList
        reviews = {reviews}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
