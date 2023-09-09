import { Col, Container, Row  } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './topnav.css'

const TopNav = () => {
  return (
        <Navbar bg="" className=" pe-0" data-bs-theme="">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="ms-auto fw-bold ">
            <Nav.Link href="#home" className=" px-0">HOME</Nav.Link>
            <Nav.Link href="#" className="ms-5 px-0">MENU</Nav.Link>
            <Nav.Link href="#" className="ms-5 px-0" >OUR STORY</Nav.Link>
            <Nav.Link href="#" className=" ms-5 px-0">CONTACT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default TopNav