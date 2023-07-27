import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/Button"
import bikeicon from "../../images/icons/bikeicon.png"
import "./NavBar.css"

function NavBar() {
  return (
    
    <Navbar id="NavBar" className="justify-content-center" collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
      <Container>
        
        <Navbar.Brand variant="primary" href="#home" id="brand">
            <img
              alt=""
              src={bikeicon}
              width="70"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <h2><span>Bike</span>Rental</h2>
            </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="m-auto justify-content-center" id="basic-navbar-nav">
          <Nav className="m-auto justify-content-center">
            <Nav.Link href="#home" className="m-auto p-2">Home</Nav.Link>
            <Nav.Link href="#plan-trip" className="m-auto p-2">About</Nav.Link>
            <Nav.Link href="#pick-bike" className="m-auto p-2">Bike Models</Nav.Link>
            <Nav.Link href="#testimonials" className="m-auto p-2">Testimonials</Nav.Link>
            <Nav.Link  className="m-auto p-2">Our Team</Nav.Link>
            <Nav.Link  className="m-auto p-2">Contact</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link className="m-auto p-3">Sign In</Nav.Link>
          <Button className="shadow p-2 px-3" variant="primary">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;