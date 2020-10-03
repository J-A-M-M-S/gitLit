import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

const testClick = (link, id) => {
	const { getByTestId } = render(<Router>{link}</Router>);
	fireEvent.click(getByTestId(id));
};

test("should click Submit button ", () => {
	testClick(<Footer />, "testClick");
});

