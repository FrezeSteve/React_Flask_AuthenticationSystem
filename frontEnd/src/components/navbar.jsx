import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavbarComponent(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">DashBoard</Nav.Link>
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
