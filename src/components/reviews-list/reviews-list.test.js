import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";


const REVIEWS = [
  {
    user: {
      name: `Max`,
      url: `img/avatar-max.jpg`
    },
    raiting: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`,
    id: 1,
  },
  {
    user: {
      name: `Igor`,
      url: `img/avatar-max.jpg`
    },
    raiting: 3,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-06-21`,
    id: 2,
  }
];

describe(`ReviewsListSnapTest`, () => {
  it(`ReviewsList should render list of reviews`, () => {
    const tree = renderer
      .create(<ReviewsList
        reviews = {REVIEWS}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
