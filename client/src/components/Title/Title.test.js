import React from "react";
// import react-testing methods
import { render } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import Table component
import Title from "./Title";

describe("Table", () => {
  test("loads and displays title of app", () => {
    // Arrange
    const { container } = render(<Title />);
    // Act - user is not interacting with this
    // Assert
    expect(container).toContainHTML("gitLit");
  });
});
