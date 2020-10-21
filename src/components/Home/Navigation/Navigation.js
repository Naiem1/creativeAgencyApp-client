import { Button, Container } from 'react-bootstrap';
import React from 'react';
import './Navigation.css';
import { Nav, Navbar, Image } from 'react-bootstrap';
import Logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
          <Navbar.Brand href="#home">
            <Image
              src={Logo}
              width='150'
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className=" nav__item ml-4 text-dark" href="#home">Home</Nav.Link>
          <Nav.Link className=" nav__item ml-4 text-dark" href="#portfolio">Our Portfolio</Nav.Link>
          <Nav.Link className=" nav__item ml-4 text-dark" href="#team">Our Team</Nav.Link>
            <Nav.Link className=" nav__item ml-4 text-dark" href="#contact">Contact Us</Nav.Link>
            <Link to='/dashboard/order'>
            <Nav.Link className="px-5 ml-4 btn btn-dark dark__button text-white" href="#login">Login</Nav.Link>   
            </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
</Navbar>
  );
};

export default Navigation;