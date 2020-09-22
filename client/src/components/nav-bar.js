import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/logoutButton";
import LoginButton from "../components/loginButton";

const MainNav = () => (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/home">gitLit</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/mixology"
      exact
      activeClassName="router-link-exact-active"
    >
      Mixology
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/drinksearch"
      exact
      activeClassName="router-link-exact-active"
    >
      Drink Search
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/roulette"
      exact
      activeClassName="router-link-exact-active"
    >
      Roulette
    </Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
