import React    from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"


function NavBar() {
    return (
      <div>
        <Navbar className = "navbar" expand="lg" sticky='top'>
        <Container>
            <Navbar.Brand href="/" className='page-name'>
                <h2>Bookaroo</h2>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className='icons'>
            <Nav className="nav-data">
            <button className="menu-data"> Contact Us</button>
            <button className= "menu-data"> Login </button>     
            </Nav>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
    </div>
  )
  }

export default NavBar;
