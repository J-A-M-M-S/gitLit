import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";
import Home from "./views/home"
import Profile from "./views/profile"


ReactDOM.render(
  <Router>
    {/* <Route exact path ={["/"]} component={Home} />
    <Route exact path ={["/"]} component={Home} /> */}
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root"),
);
