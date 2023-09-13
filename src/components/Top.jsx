import { Row,Container,Col } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Logo.png'
import logo2 from '../assets/Logo2.png'
import rider from '../assets/rider.png'
import './top.css'
const Top = () => {
  return (
    // <Navbar className="">
    //   <Container>
    //     <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="justify-content-end">
    //       <Navbar.Text className=" d-flex align-items-center">
    //      <img src={rider} alt="" />

    //       <p className=" mt-2 text-dark fw-bold ">Express Delivery</p>
    //     <p className=" mt-2 text-dark fw-bold ">+1 234 567 890</p>
    //       </Navbar.Text>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Container className=" text-white">
        <br />
        <br />
    <Row className=" d-flex align-items-center justify-content-between ">
      <Col className=" col-4 col-sm-6 col-md-6">
        <img src={logo} alt="" className=" d-none d-sm-flex d-md-flex" />
        <img src={logo2} alt="" className=" d-flex d-sm-none  me-auto" />
        
      </Col>

      <Col className=" d-flex align-items-center justify-content-start justify-content-sm-end  col-8 col-sm-6 col-md-6">
        <div className=" me-2 ">

        <img src={rider} alt="" className=" d-flex align-items-start me-auto " />
        {/* <p>Express Delivery</p>
        <p>+1 234 567 890</p> */}

        </div>
        <div className=" d-flex">

        <p className=" mt-2  fw-bold top--delivery d-none d-sm-none d-md-flex ">Express Delivery</p>
        <p className=" mt-2  fw-bold top--call d-flex align-items-sm-start ">+1 234 567 890</p>
        </div>
      </Col>
    </Row>
  </Container>


  )
}

export default Top;

    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <p className=" mt-2 text-dark fw-bold ">Express Delivery</p>
        <p className=" mt-2 text-dark fw-bold ">+1 234 567 890</p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>