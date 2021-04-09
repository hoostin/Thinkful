import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import sinon from "sinon";

import Roster from "../src/Roster";

// test using Jest with default jsdom environment
describe("Test App.jsx", () => {
  const roster = [
    {firstName: "John", lastName: "Smith", location: "California"},
    {firstName: "April", lastName: "White", location: "Nebraska"},
    {firstName: "Jane", lastName: "Doe", location: "Florida"},
    {firstName: "Dan", lastName: "Lee", location: "New Mexico"},
  ];
  const keys = ["firstName", "lastName", "location"];
  test("Roster detailed view", () => {
    const wrapper = shallow(<Roster detailed={true} roster={roster} />);
    const tableWrapper = wrapper.find("table");
    expect(tableWrapper.length).toEqual(1);
    const trWrapper = tableWrapper.find("tr");
    expect(trWrapper.length).toEqual(roster.length + 1);
    roster.forEach((rosterItem, i) => {
      const tdWrapper = trWrapper.at(i + 1).find("td");
      expect(tdWrapper.length).toEqual(3);
      keys.forEach((key, i) => (
        expect(tdWrapper.at(i).text()).toEqual(rosterItem[key])
      ));
    });
  });
  test("Roster not detailed view", () => {
    const wrapper = shallow(<Roster detailed={false} roster={roster} />);
    const olWrapper = wrapper.find("ol");
    expect(olWrapper.length).toEqual(1);
    const liWrapper = olWrapper.find("li");
    expect(liWrapper.length).toEqual(roster.length);
    roster.forEach(({firstName}, i) => (
      expect(liWrapper.at(i).text()).toEqual(firstName)
    ));
  });
});