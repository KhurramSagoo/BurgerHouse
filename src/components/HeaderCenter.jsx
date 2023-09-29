import { Col, Container, Row } from 'react-bootstrap';
import headerBurger from '../assets/headerburgeredit.png'
import './headerCenter.css'

const HeaderCenter = () => {
    return (
        <Container>
            <br />
            <br />
            <Row className=' d-flex  flex-column flex-md-row flex-sm-column  header--center--container'>
                <Col className=' col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-lg-start justify-content-lg-center '>
                    <p className=" header--line--one">IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
                    <h1 className='header--burger'>BURGER</h1>
                    <h1 className='header--week'>WEEK</h1>
                </Col>
                <Col className=' col-lg-6 col-md-6 col-12 col-sm-12 d-flex align-items-center justify-content-center position-relative'>
                    <div className=" position-relative">
                        <div className="two-div">
                            <div className="price-div ">
                                <p className="price-tag-text">$5
                                    <span className='price-tag-text-span'>.49</span>
                                </p>
                                <p className="price-tag-text--only"> ONLY</p>
                            </div>
                        </div>
                        <img src={headerBurger} alt="burger with coke" className='header--burger--image' />

                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <br />
        </Container>
    )
}

export default HeaderCenter