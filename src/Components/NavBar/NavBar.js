import React    from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"


class NavBar extends React.Component {

  render(){
    return (
      <div>
        <Navbar className = "navbar" expand="lg" sticky='top'>
        <Container>
            <Navbar.Brand href="/" className='page-name'>
                <h2>ReviewVerse</h2>
            </Navbar.Brand>
            
            <Navbar.Toggle/>
            <Navbar.Collapse className='icons'>
            <Nav className="nav-data">
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            </form>
            <button className= "menu-data">Search</button>
            <button className= "menu-data"> Login </button>
            
            </Nav>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
    </div>
  )
  }
}

export default NavBar;
