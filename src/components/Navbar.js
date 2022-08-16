import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "/home/elifyld/react-proj_3/src/components/images/Logo.png";

const navbar = () => {
  return (
    <div style={{ backgroundColor: "#1c2430" }}>
      <Navbar collapseOnSelect expand="lg" bg="#1c2430" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img style={{ width: 150 }} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                Why QLogisticks
              </Nav.Link>
              <Nav.Link href="#deets" style={{ color: "white" }}>
                Features
              </Nav.Link>
              <Nav.Link href="#memes" style={{ color: "white" }}>
                Product
              </Nav.Link>
              <Nav.Link href="#memes" style={{ color: "white" }}>
                Contact
              </Nav.Link>
              <Nav.Link href="#memes" style={{ color: "white" }}>
                Dashboard
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;
