import * as React from "react";
import {noop} from "../../common";
import * as renderer from "react-test-renderer";
import HeaderBlock from "./header-block";

const enum AuthorizationStatus {
  AUTH =`AUTH`,
  NO_AUTH =`NO_AUTH`
}

const name = `oliver@gmail.com`;

describe(`HeaderBlockSnapTest`, () => {
  it(`HeaderBlock with isLoginComplete positiv flag should render header block with the name`, () => {
    const tree = renderer
      .create(<HeaderBlock
        name = {name}
        onLoadFavoriteOffers = {noop}
        authorizationStatus = {AuthorizationStatus.AUTH}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`HeaderBlock with isLoginComplete negative flag should render header block with Sign In`, () => {
    const tree = renderer
      .create(<HeaderBlock
        onLoadFavoriteOffers = {noop}
        authorizationStatus = {AuthorizationStatus.NO_AUTH}
        name = {name}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
