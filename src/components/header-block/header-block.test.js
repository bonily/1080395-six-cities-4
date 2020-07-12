import React from "react";
import renderer from "react-test-renderer";
import HeaderBlock from "./header-block.jsx";


const name = `Oliver`;

describe(`HeaderBlockSnapTest`, () => {
  it(`HeaderBlock with isLoginComplete positiv flag should render header block with the name`, () => {
    const tree = renderer
      .create(<HeaderBlock
        isLoginComplete = {true}
        name = {name}
        onUserBlockClick = {() => {}}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`HeaderBlock with isLoginComplete negative flag should render header block with Sign In`, () => {
    const tree = renderer
      .create(<HeaderBlock
        isLoginComplete = {false}
        onUserBlockClick = {() => {}}
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
