import { Container,Row,Col } from "react-bootstrap"
import Top from "./Top"
import TopNav from "./TopNav"
import HeaderCenter from "./HeaderCenter"
import './header.css'
const Header = () => {
  return (
    <Container fluid className=" header--container">
    <Row>
      <Col col={12}>
      
      <Top />
      <TopNav />
      <HeaderCenter />
      
      
      </Col>
    </Row>
  </Container>
  )
}

export default Header