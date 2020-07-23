import React from "react";
import renderer from "react-test-renderer";
import UserBlock from "../user-block/user-block.jsx";

const name = `Ivan`;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

describe(`UserBlockSnapTest`, () => {
  it(`UserBlock with AuthorizationStatus positiv flag should render user block with the name`, () => {
    const tree = renderer
      .create(<UserBlock
        authorizationStatus = {AuthorizationStatus.AUTH}
        name = {name}
        onUserBlockClick = {() => {}}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`UserBlock with AuthorizationStatus negative flag should render header block with Sign In`, () => {
    const tree = renderer
      .create(<UserBlock
        authorizationStatus = {AuthorizationStatus.NO_AUTH}
        onUserBlockClick = {() => {}}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
