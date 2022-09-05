import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "/home/elifyld/react-proj_3/src/components/images/Logo.png";

const navbar = () => {
  
  return (
    <div style={{ backgroundColor: "#1c2430" }}>
      <Navbar collapseOnSelect expand="lg" bg="#1c2430" variant="dark">
      
        <Container>
          <Navbar.Brand >
            {" "}
            <img style={{ width: 200 }} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto " > 
              <Nav.Link  href="#Home" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#Why" style={{ color: "white" }}>
                Why QLogisticks
              </Nav.Link>
              <Nav.Link href="#Features" style={{ color: "white" }}>
                Features
              </Nav.Link>
              <Nav.Link href="#Product" style={{ color: "white" }}>
                Product
              </Nav.Link>
              <Nav.Link href="#Contact" style={{ color: "white" }}>
                Contact
              </Nav.Link>
              <Nav.Link href="#Dasboard" style={{ color: "white" }}>
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
