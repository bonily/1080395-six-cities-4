import * as React from "react";
import * as renderer from "react-test-renderer";
import FavoriteEmpty from "./favorite-empty";


describe(`FavoriteEmptySnapTest`, () => {
  it(`Favorite empty should render favorite empty block`, () => {
    const tree = renderer
      .create(<FavoriteEmpty />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
