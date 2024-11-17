import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate(); // useNavigate hook inside functional component

  const handleClick = () => {
    navigate("/signup"); // Navigate to the sign-up page
  };

  return (
    <div>
      <Navbar className="navbar" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/" className="page-name">
            <h2>Bookaroo</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="icons">
            <Nav className="nav-data">
              <div>
                <button onClick={handleClick}>SignUp</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
