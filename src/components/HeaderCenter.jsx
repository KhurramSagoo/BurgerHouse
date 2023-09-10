// import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import headerBurger from '../assets/headerburger.png'
import './headerCenter.css'

const HeaderCenter = () => {
    return (
        <Container>
            <Row className=' d-flex col-12 flex-column flex-md-row header--center--container'>
                <div className=' col-lg-6 col-md-6 col col-12 d-flex flex-column align-items-lg-start justify-content-lg-center '>
                    <h5 className=" header--line--one">IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</h5>
                    <h1 className='header--burger'>BURGER</h1>
                    <h1 className='header--week'>WEEK</h1>
                </div>
                <div className=' col-lg-6 col-md-6 col-12 col-sm-12'>
                    <img src={headerBurger} alt="burger with coke" className='header--burger--image' />
                </div>
            </Row>
        </Container>
    )
}

export default HeaderCenter