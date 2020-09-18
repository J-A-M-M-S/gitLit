import React from "react";
import Title from "./components/Title";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar, Footer, Loading, PrivateRoute } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Title />
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
