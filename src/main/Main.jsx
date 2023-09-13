import { Col, Container, Row } from "react-bootstrap"
import burgerLeft from '../assets/BurgerMainLeft.png'
import image1 from '../assets/Image1.png'
import image2 from '../assets/Image2.png'
import './main.css'

const Main = () => {
    return (
        <Container>
            <Row className=" my-5">
                <Col className=" col-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="main--left--image--div">
                        <p className=" main--left-p1">TRY IT TODAY</p>
                        <p className=" main--left-p2">MOST POPULAR BURGER</p>
                        <img src={burgerLeft} alt="" className=" main--image--burger" />
                    </div>
                </Col>
                <Col className=" col-12 col-sm-12 col-md-12 col-lg-6 ">
                    <div className=" position-relative main--right--image--div--top">
                        <p className="main--right--top--1">TRY IT TODAY</p>
                        <p className="main--right--top--2">MORE FUN</p>
                        <p className="main--right--top--3">MORE TASTE</p>
                        <img src={image1} alt="" className=" main--image--burger" />
                    </div>
                    <div className=" position-relative main--right--image--div--bottom">
                        <p className="main--right--bottom--1">TRY IT TODAY</p>
                        <p className="main--right--bottom--2">FRESH & CHILI</p>
                        <img src={image2} alt="" className=" main--image--burger" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main