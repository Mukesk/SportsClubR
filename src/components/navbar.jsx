import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./navbar.css";
import React from 'react';
            import { NavLink } from 'react-router-dom';
const Navbar_R = () => {
  return (
    <Navbar expand="lg" sticky="top" className="p-3 navbar sticky">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src='./IMAGES/logo-1.png' alt="Logo" />
        </Link>

        {/* Navbar Toggle for small screens */}
        <Navbar.Toggle aria-controls="navbarScroll" style={{ color: "#fff", backgroundColor: "#fff" }} />

        {/* Navigation Links */}
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="nav-links d-flex">
            <Link to="/" className="nav-link inkd" style={{ color: "#fff" }}>HOME</Link>        
            <Link to="/players" className="nav-link inkd" style={{ color: "#fff" }}>PLAYERS</Link>
            <Link to="/news" className="nav-link inkd" style={{ color: "#fff" }}>OUR NEWS</Link>
            <Link to="/contact" className="nav-link inkd" style={{ color: "#fff" }}>CONTACT US</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar_R;
