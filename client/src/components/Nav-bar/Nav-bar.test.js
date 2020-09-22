import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Nav-bar";
import {BrowserRouter as Router} from "react-router-dom";

describe("Navbar tabs ", () => {
  test("", () => {
    const { container } = render(<Router><Navbar /></Router>);
    expect(container).toContainHTML("Profile");
  });
});
