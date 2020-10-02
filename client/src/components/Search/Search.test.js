import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import waitForExpect from "wait-for-expect";
import Search from "./Search";
import { BrowserRouter as Router } from "react-router-dom";



describe("<Search />", () => {
	test("download ingredients from internets", async () => {	
  const wrapper = mount(
    <Router><Search data={Search} /></Router>
  );

  await act(async () => {
    wrapper.find({ children: "Submit" }).simulate("click");
  });

  await waitForExpect(() => {
    wrapper.update();
    data.forEach(data => {
      expect(wrapper.text()).toMatch(data);
    });
  });
});

});
