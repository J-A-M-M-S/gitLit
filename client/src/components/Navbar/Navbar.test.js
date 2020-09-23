import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar tab Profile", () => {
  test("The profile tab is rendering", () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container).toContainHTML("Profile");
  });
  test("The home tab is rendering", () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container).toContainHTML("Home");
  });
  test("The mixology tab is rendering", () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container).toContainHTML("Mixology");
  });
  test("The drink search is rendering", () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container).toContainHTML("Drink Search");
  });
  test("The roulette is rendering", () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container).toContainHTML("Roulette");
  });
});
