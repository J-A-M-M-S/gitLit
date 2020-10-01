import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";
import "./Navbar.css";

const MainNav = () => (
  <Navbar expand="lg" variant="dark">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="router-link-exact-active">
        <Nav.Link
          as={RouterNavLink}
          to="/"
          exact
          className="router-link-exact-active"
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={RouterNavLink}
          to="/profile"
          exact
          className="router-link-exact-active"
        >
          Profile
        </Nav.Link>
        <Nav.Link
          as={RouterNavLink}
          to="/mixology"
          exact
          className="router-link-exact-active"
        >
          Mixology
        </Nav.Link>
        <Nav.Link
          as={RouterNavLink}
          to="/drinksearch"
          exact
          className="router-link-exact-active"
        >
          Drink Search
        </Nav.Link>
        <Nav.Link
          as={RouterNavLink}
          to="/roulette"
          exact
          className="router-link-exact-active"
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
    <Nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar expand="md" id="fullbar">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
