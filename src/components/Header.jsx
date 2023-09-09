import { Container,Row,Col } from "react-bootstrap"
import Top from "./Top"
import TopNav from "./TopNav"
import './header.css'
const Header = () => {
  return (
    <Container fluid className=" header--container">
    <Row>
      <Col col={12}>
      
      <Top />
      <TopNav />
      
      </Col>
    </Row>
  </Container>
  )
}

export default Header