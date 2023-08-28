import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
    >
      <Link to="/">
        <img
          src={logo}
          width="100"
          height="60"
          className="d-inline-block align-top ms-2 rounded"
          alt="Logo"
        />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light me-2" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="link-button">
            Home
          </Link>
        </Nav>
        <Nav>
          <Link to="/login" className="button">
            Login
          </Link>
          <Link to="/register" className="button">
            Register
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
