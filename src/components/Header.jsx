import { Container,Row,Col } from "react-bootstrap"
import Top from "./Top"
import './header.css'
const Header = () => {
  return (
    <Container fluid className=" header--container">
    <Row>
      <Col>
      
      <Top />
      
      </Col>
    </Row>
  </Container>
  )
}

export default Header