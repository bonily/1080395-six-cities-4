import React from "react";
import renderer from "react-test-renderer";
import FavoriteEmpty from "./favorite-empty.jsx";


describe(`FavoriteEmptySnapTest`, () => {
  it(`Favorite empty should render favorite empty block`, () => {
    const tree = renderer
      .create(<FavoriteEmpty />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
