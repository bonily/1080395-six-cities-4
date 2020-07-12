import React from "react";
import renderer from "react-test-renderer";
import UserBlock from "../user-block/user-block.jsx";

const name = `Ivan`;

describe(`UserBlockSnapTest`, () => {
  it(`UserBlock with isLoginComplete positiv flag should render user block with the name`, () => {
    const tree = renderer
      .create(<UserBlock
        isLoginComplete = {true}
        name = {name}
        onUserBlockClick = {() => {}}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`UserBlock with isLoginComplete negative flag should render header block with Sign In`, () => {
    const tree = renderer
      .create(<UserBlock
        isLoginComplete = {false}
        onUserBlockClick = {() => {}}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
