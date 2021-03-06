import React from "react";
import Title from "./components/Title/Title";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar, Footer, Loading, PrivateRoute } from "./components";
import "./App.css";
import { Home, Profile, DrinkSearch, Roulette } from "./views";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />

      <Container fluid id="fullBody" className="flex-grow-1">
        <Title />
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/Profile" component={Profile} />
          {/* <Route path="/Mixology" component={Mixology} /> */}
          <PrivateRoute path="/DrinkSearch" component={DrinkSearch} />
          <PrivateRoute path="/Roulette" component={Roulette} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
