import {Container  } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './topnav.css'

const TopNav = () => {
  return (
      //   <Navbar bg="" className=" pe-0" data-bs-theme="">
      //   <Container>
      //     {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      //     <Nav className="ms-auto fw-bold ">
      //       <Nav.Link href="#home" className=" px-0">HOME</Nav.Link>
      //       <Nav.Link href="#" className="ms-5 px-0">MENU</Nav.Link>
      //       <Nav.Link href="#" className="ms-5 px-0" >OUR STORY</Nav.Link>
      //       <Nav.Link href="#" className=" ms-5 px-0">CONTACT US</Nav.Link>
      //     </Nav>
      //   </Container>
      // </Navbar>
      <Navbar collapseOnSelect expand="lg" className="top--nav">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
           
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
          <Nav className="ms-auto fw-bold ">
             <Nav.Link href="#home" className="ms-lg-5 px-0 text-black fs-5">HOME</Nav.Link>
             <Nav.Link href="#" className="ms-lg-5 px-0 text-black fs-5">MENU</Nav.Link>
           <Nav.Link href="#" className="ms-lg-5 px-0 text-black fs-5" >OUR STORY</Nav.Link>
            <Nav.Link href="#" className=" ms-lg-5 px-0 text-black fs-5">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default TopNav

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function CollapsibleExample() {
//   return (
   
//   );
// }

// export default CollapsibleExample;