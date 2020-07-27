import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withFormReview from "./with-form-review";

const id = `3`;
const newComment = `vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv`;
const raiting = 5;


configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withFormReview(MockComponent);

describe(`withFormReview2etest`, () => {
  it(`Should withFormReview component render correctly`, () => {
    const onReviewFormSubmit = jest.fn();

    const wrapper = shallow(<MockComponentWrapped
      onReviewFormSubmit = {onReviewFormSubmit}
      id = {id}
    />);

    wrapper.props().onCommentChange(newComment);
    expect(wrapper.props().comment).toBe(newComment);

    wrapper.props().onRaitingCheckboxChange(raiting);
    expect(wrapper.props().raiting).toBe(raiting);

    expect(wrapper.props().isFormAble).not.toBeFalsy();

    wrapper.props().onCommentChange(``);

    expect(wrapper.props().isFormAble).toBeFalsy();
  });
});
