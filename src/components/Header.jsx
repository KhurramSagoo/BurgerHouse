import { Container,Row,Col } from "react-bootstrap"
import Top from "./Top"
import TopNav from "./TopNav"
import HeaderCenter from "./HeaderCenter"
import './header.css'
const Header = () => {
  return (
    <Container fluid className=" header--container">
    <Row>
      <Col className=" col-9 col-sm-12">
      <Top />
      
      </Col>
      <Col className=" col-3 col-sm-12 my-5 my-sm-0">
      <TopNav />

      
      </Col>
      <Col className=" col-12">
      
      <HeaderCenter />
      </Col>

    </Row>
  </Container>
  )
}

export default Header