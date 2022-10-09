import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import bofb from "../Assets/Images/BOFBTransparent.png";

function NavBar() {
  return (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="col-4">
          <img
            src={bofb}
            width="30"
            height="30"
            className="logo d-inline-block align-top fluid"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <div className="col-2" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav">
            <Nav.Item>
              <Nav.Link href="#about">Our Story</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#hive">The Hive</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#blog">Latest Buzz</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" disabled>
                Bee The Change
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" disabled>
                Shop
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" disabled>
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" disabled>
                Community
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
