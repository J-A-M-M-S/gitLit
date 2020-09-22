import React from "react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logoutButton";
import LoginButton from "./loginButton";
import "./Nav-bar.css";
 
const MainNav = () => (
  <Navbar expand="lg">
    {/*ERROR gitlit brand logo clicks and signs out of login" */}
    <Navbar.Brand href="/">gitLit</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" style={{ justifyContent: "left" }}>
        <Link
          as={RouterNavLink}
          to="/"
          exact
          className="router-link-exact-active"
        >
          Home
        </Link>
        <Link
          as={RouterNavLink}
          to="/profile"
          exact="true"
          className="router-link-exact-active"
        >
          Profile
        </Link>
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
    <Navbar expand="md" className="fullbar">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};
 
export default NavBar;