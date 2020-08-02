import * as React from "react";
import * as renderer from "react-test-renderer";
import UserBlock from "./user-block";
import {noop} from "../../common";

const name = `Ivan`;

const enum AuthorizationStatus {
  AUTH =`AUTH`,
  NO_AUTH =`NO_AUTH`
}

describe(`UserBlockSnapTest`, () => {
  it(`UserBlock with AuthorizationStatus positiv flag should render user block with the name`, () => {
    const tree = renderer
      .create(<UserBlock
        authorizationStatus = {AuthorizationStatus.AUTH}
        name = {name}
        onLoadFavoriteOffers = {noop}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`UserBlock with AuthorizationStatus negative flag should render header block with Sign In`, () => {
    const tree = renderer
      .create(<UserBlock
        authorizationStatus = {AuthorizationStatus.NO_AUTH}
        onLoadFavoriteOffers = {noop}
        name = {name}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
