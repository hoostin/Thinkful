import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import sinon from "sinon";

import IncrementButtons from "../src/IncrementButtons";

// test using Jest with default jsdom environment
describe("Test IncrementButtons", () => {
  let wrapper;
  const getText = () => {
    const h3 = wrapper.find("h3");
    return h3 && h3.map(element => element.text());
  };
  beforeEach(() => {
    wrapper = shallow(<IncrementButtons />);
  });
  test("initial text", () => {
    expect(getText()).toEqual(
      ["Last Pressed: ", "One Count: 0", "Two Count: 0"]
    );
  });
  test("text after clicking button One", () => {
    wrapper.find("button").first().simulate("click");
    expect(getText()).toEqual(
      ["Last Pressed: One", "One Count: 1", "Two Count: 0"]
    );
  });
  test("text after clicking button Two", () => {
    wrapper.find("button").last().simulate("click");
    expect(getText()).toEqual(
      ["Last Pressed: Two", "One Count: 0", "Two Count: 1"]
    );
  });
  test("text after clicking button One then Two", () => {
    wrapper.find("button").first().simulate("click");
    wrapper.find("button").last().simulate("click");
    expect(getText()).toEqual(
      ["Last Pressed: Two", "One Count: 1", "Two Count: 1"]
    );
  });
  test("text after clicking buttons Two, Two, One", () => {
    wrapper.find("button").last().simulate("click");
    wrapper.find("button").last().simulate("click");
    wrapper.find("button").first().simulate("click");
    expect(getText()).toEqual(
      ["Last Pressed: One", "One Count: 1", "Two Count: 2"]
    );
  });
});