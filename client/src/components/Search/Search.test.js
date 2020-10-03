import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./Search";
import { shallow } from 'enzyme';
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new Adapter() });

describe("data must be represented according to empty array and property", () => {

  const data = {
    id: [],
    name: [],
    instructions: [],
    image: [],
    ing1: [],
    measure1: [],
  };
  const wrapper = shallow(
    <Router><Search data={[]}/></Router>
  )
  test("data contains property listed", () => {
    expect(data).toHaveProperty("id");
  });
});

