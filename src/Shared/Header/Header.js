import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../images/logo2.png';
import bg from '../../images/bannerbackground-2.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/home">
              <img width="130px" src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto fw-bold">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
          <img className="img-fluid" src={bg} alt="" />
          
      </div>
    </>
  );
};

export default Header;
