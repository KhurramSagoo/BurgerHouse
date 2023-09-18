import { Col, Container, Row } from 'react-bootstrap';
import image4 from '../assets/Burger-Image4.png';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './discover.css';

const CustomCarouselIndicators = ({ items, activeIndex, onSelect }) => {
  return (
    <ol className="custom-carousel-indicators">
      {items.map((_, index) => (
        <li
          key={index}
          className={index === activeIndex ? 'active' : ''}
          onClick={() => onSelect(index)}
        ></li>
      ))}
    </ol>
  );
};

const Discover = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className=' shadow p-4 my-5'>
      <Row>
        <Col className='col-12 col-sm-12 col-md-12 col-lg-12'>
          <Carousel activeIndex={index} onSelect={handleSelect} className="my-custom-carousel" interval={1500}>
            <Carousel.Item className='ps-lg-5 pe-lg-1 p-md-1 p-sm-1 p-1 '>
              <div className='d-flex align-items-center justify-content-center flex-lg-row flex-md-column  flex-sm-column flex-column  '>
                <div className='col-lg-6 d-flex flex-column'>
                  <div>
                    <p className='fs-2 my-0 py-0'>DISCOVER</p>
                    <p className='discover--heading'>UPCOMING EVENTS</p>
                    <p className='fs-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis voluptates repudiandae debitis hic? Minus enim veniam optio obcaecati veritatis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis adipisicing elit. Impedit reiciendis enim veniam optio obcaecati veritatis.Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                  <div>
                    <CustomCarouselIndicators items={[0, 1, 2]} activeIndex={index} onSelect={handleSelect} />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <img src={image4} alt="" style={{ width: "100%" }} className='p-1' />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className='ps-lg-5 pe-lg-1 p-md-1 p-sm-1 p-1 '>
              <div className='d-flex align-items-center justify-content-center flex-lg-row flex-md-column  flex-sm-column flex-column  '>
                <div className='col-lg-6 d-flex flex-column'>
                  <div>
                    <p className='fs-2 my-0 py-0'>DISCOVER</p>
                    <p className='discover--heading'>UPCOMING EVENTS</p>
                    <p className='fs-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis voluptates repudiandae debitis hic? Minus enim veniam optio obcaecati veritatis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis adipisicing elit. Impedit reiciendis enim veniam optio obcaecati veritatis.Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                  <div>
                    <CustomCarouselIndicators items={[0, 1, 2]} activeIndex={index} onSelect={handleSelect} />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <img src={image4} alt="" style={{ width: "100%" }} className='p-1' />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className='ps-lg-5 pe-lg-1 p-md-1 p-sm-1 p-1 '>
              <div className='d-flex align-items-center justify-content-center flex-lg-row flex-md-column  flex-sm-column flex-column  '>
                <div className='col-lg-6 d-flex flex-column'>
                  <div>
                    <p className='fs-2 my-0 py-0'>DISCOVER</p>
                    <p className='discover--heading'>UPCOMING EVENTS</p>
                    <p className='fs-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis voluptates repudiandae debitis hic? Minus enim veniam optio obcaecati veritatis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis adipisicing elit. Impedit reiciendis enim veniam optio obcaecati veritatis.Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                  <div>
                    <CustomCarouselIndicators items={[0, 1, 2]} activeIndex={index} onSelect={handleSelect} />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <img src={image4} alt="" style={{ width: "100%" }} className='p-1' />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
export default Discover;
