import React from 'react'
import'./Nave.css';
import{Navbar,Nav,Container}  from 'react-bootstrap'
import Logo from '../../assets/logo.png'
function Navs() {
   
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} title='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About-Us">About Us</Nav.Link>
            <Nav.Link href="#Explore-Foods">Explore Foods</Nav.Link>
            <Nav.Link href="#Reviews">Reviews</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id='lastnav'>98675434</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navs
