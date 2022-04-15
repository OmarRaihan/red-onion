import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../images/logo2.png'

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
              <img width="150px" src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto fw-bold">
            <Nav.Link href="#home">Cart</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
