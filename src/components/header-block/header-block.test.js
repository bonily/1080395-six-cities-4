import * as React from "react";
import renderer from "react-test-renderer";
import HeaderBlock from "./header-block.jsx";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const name = `Oliver`;

describe(`HeaderBlockSnapTest`, () => {
  it(`HeaderBlock with isLoginComplete positiv flag should render header block with the name`, () => {
    const tree = renderer
      .create(<HeaderBlock
        name = {name}
        loadFavoriteOffers = {() => {}}
        authorizationStatus = {AuthorizationStatus.AUTH}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`HeaderBlock with isLoginComplete negative flag should render header block with Sign In`, () => {
    const tree = renderer
      .create(<HeaderBlock
        isLoginComplete = {false}
        loadFavoriteOffers = {() => {}}
        authorizationStatus = {AuthorizationStatus.NO_AUTH}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
