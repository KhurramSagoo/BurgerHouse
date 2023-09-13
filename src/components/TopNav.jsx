import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './topnav.css'
const TopNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="top--nav ">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" ms-auto" />
        <Navbar.Collapse id="responsive-navbar-nav" className=" ">
          {/* <Nav className=" ms-auto">
          </Nav> */}
          <Nav className="ms-auto fw-bold ">
            {/* to bring the nav links to the right side 
            d-flex flex-sm-column align-items-sm-end flex-lg-row align-items-end 
            */}
            <Nav.Link href="#home" id="nav-link" className="ms-lg-5 px-0 text-black   ">HOME</Nav.Link>
            <Nav.Link href="#" className="ms-lg-5 px-0 text-black ">MENU</Nav.Link>
            <Nav.Link href="#" className="ms-lg-5 px-0 text-black " >OUR STORY</Nav.Link>
            <Nav.Link href="#" className=" ms-lg-5 px-0 text-black ">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default TopNav