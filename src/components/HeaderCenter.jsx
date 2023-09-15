// import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import headerBurger from '../assets/headerburgeredit.png'
import './headerCenter.css'
import priceLogo from '../assets/price-tag-logo.png'

const HeaderCenter = () => {
    return (
        <Container>
            <br />
            <br />
            <Row className=' d-flex  flex-column flex-md-row flex-sm-column  header--center--container'>
                <Col className=' col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-lg-start justify-content-lg-center position-relative '>
                    <p className=" header--line--one">IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
                    <h1 className='header--burger'>BURGER</h1>
                    <h1 className='header--week'>WEEK</h1>
                </Col>
                <Col className=' col-lg-6 col-md-6 col-12 col-sm-12 d-flex flex-column align-items-center justify-content-center main--right--burger-logo-text--div '>
                <img src={headerBurger} alt="burger with coke" className='header--burger--image' />
                <div className="main--left--price--logo--div">
                        <p className=" main--price-logo-p1">TRY IT TODAY</p>
                        <p className=" main--price-logo-p2">MOST POPULAR BURGER</p>
                        <img src={priceLogo} alt="" className=" main--price-logo--burger" />
                    </div>

                </Col>
            </Row>
            <br />
            <br />
            <br />
            {/* <br /> */}
       </Container>
    )
}

export default HeaderCenter