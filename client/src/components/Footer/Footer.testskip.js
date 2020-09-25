import React from "react";
// import react-testing methods
import { render } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import Footer component
import Footer from "./Footer";

describe("Footer", () => {
  test("loads and displays social items", () => {
    // Arrange
    const { container } = render(<Footer />);
    // Act - user is not interacting with this
    // Assert
    expect(container).toContainHTML("Like, Follow, Subscribe");
  });
});
