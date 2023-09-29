import { Button, Col, Container, Row } from 'react-bootstrap'
import './burger-layer.css'
import image1 from '../assets/layer-burger1.png'
import image2 from '../assets/layer-burger2.png'
const BurgerLayer = () => {
  return (
    <Container className='layer--container mb-5'>
      <Row>
        <Col className=' col-12 d-flex flex-column align-items-center justify-content-center '>
          <button className='button--tasty my-4'>  ALWAYS TASTY BURGER</button>
          <p className=' text-center layer--heading'>CHOOSE & ENJOY</p>
          <p className='text-center layer--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga architecto corrupti officiis, voluptate itaque, minus laudantium et placeat qui hic nam sint voluptates natus soluta dolore vitae ipsum neque quas?</p>
        </Col>
      </Row>
      <Row className=' d-flex d-flex align-items-end justify-content-end  '>
        <Col className='col-12 col-sm-12 col-md-4 mt-5 d-flex flex-column align-items-center justify-content-end' >
          <img src={image1} alt="" className=' layer--image' />
          <p className='layer--h1 text-center'>Lorem, ipsum dolor.</p>
          <p className=' layer--p1 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio?</p>
          <button className=' layer--button'> ORDER NOW</button>
        </Col>
        <Col className='col-12 col-sm-12 col-md-4 d-flex flex-column align-items-center justify-content-center mt-sm-5 mt-5 '>
          <img src={image2} alt="" className=' layer--image2' />
          <p className='layer--h1 text-center'>Lorem, ipsum dolor.</p>
          <p className=' layer--p1 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio?</p>
          <button className=' layer--button'> ORDER NOW</button>
        </Col>
        <Col className='col-12 col-sm-12 col-md-4 d-flex flex-column align-items-center justify-content-center mt-sm-5 mt-5'>
          <img src={image1} alt="" className=' layer--image' />
          <p className='layer--h1 text-center'>Lorem, ipsum dolor.</p>
          <p className=' layer--p1 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio?</p>
          <button className=' layer--button'> ORDER NOW</button>
        </Col>
      </Row>
    </Container>
  )
}

export default BurgerLayer