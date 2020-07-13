import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UserBlock from "./user-block.jsx";

const isLoginComplete = false;

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`UserBlockE2eTest`, () => {
  it(`onUserBlockClick should return true or false of isLoginComplete value`, () => {
    const onUserBlockClick = jest.fn();

    const userBlock = mount(
        <UserBlock
          isLoginComplete = {isLoginComplete}
          onUserBlockClick = {onUserBlockClick}
        />
    );

    const navLink = userBlock.find(`.header__nav-link`);

    navLink.simulate(`click`);
    expect(onUserBlockClick).toHaveBeenCalledTimes(1);
    expect(onUserBlockClick.mock.calls[0][0]).toBeFalsy();


  });
});
