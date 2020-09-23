import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";
// you can also use a renderer like "@testing-library/react" or "enzyme/mount" here
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";

// app.test.js
test("navigates social when you click the icon", () => {
  // in a real test a renderer like "@testing-library/react"
  // would take care of setting up the DOM elements
  //   const root = document.createElement("div");
  //   document.body.appendChild(root);

  // Render app
  render(
    <Router>
      <Footer />
    </Router>,
    // root,
  );

  // Interact with page
  act(() => {
    // Find the link (perhaps using the text content)
    const goYouTubeLink = document.querySelector(".youtube");
    // Click it
    goYouTubeLink.dispatchEvent(new MouseEvent("click", {}));
  });

  // Check correct page content showed up
  expect(document.body.baseURI).toBe("https://www.youtube.com/");
});
