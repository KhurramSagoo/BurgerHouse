import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./fahad.css";
import leftBurger from './assets/Burger1.png'
import bottle from './assets/Bottle.png'
import plate from './assets/plate.png'

function Fahad() {
  return (
    <section className="w-100 booking-form-section position-relative ">
      <Container>
        <Row>
          <Col xs={12} className="text-center my-2 my-sm-3 my-md-5">
            <br />
            <p className="my-0 book--p p-0">RESERVATION</p>
            <p className="book--heading my-0 pt-0">BOOK YOUR TABLE</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
        <img src={leftBurger} alt="" className="book--left--burger"/>
        <img src={bottle} alt="" className="book--left--bottle "/>
          <Col xs={4} className=" col-12 col-sm-12 col-md-9  col-lg-4 col-xl-4">
            <Form.Control
              type="text"
              size="lg"
              placeholder="NAME"
              className=" my-3  book--input p-3"
            />
            <Form.Control
              type="text"
              size="lg"
              placeholder="DATE"
              className=" my-3 book--input p-3"
            />
            <Form.Control
              type="text"
              size="lg"
              placeholder="PEOPLE"
              className=" my-3 book--input p-3"
            />
          </Col>
          <Col xs={4} className=" col-12 col-sm-12 col-md-9  col-lg-4 col-xl-4 ">
            <Form.Control
              type="text"
              size="lg"
              placeholder="EMAIL"
              className=" my-3 book--input p-3"
            />
            <Form.Control
              type="text"
              size="lg"
              placeholder="TIME"
              className=" my-3 book--input p-3"
            />
            {/* <Button variant="danger" size="lg" className=" w-100 p-2">
              FIND A TABLE
            </Button> */}
            <Button variant="danger" size='lg' className=' w-100 my-0 p-3'>FIND A TABLE</Button>{' '}
          </Col>
          <img src={plate} alt="" className="burger-plate-right" />
        </Row>
      </Container>
    </section>
  );
}

export default Fahad;