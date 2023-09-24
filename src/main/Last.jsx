import { Container, Row,Col } from 'react-bootstrap'
import image from '../assets/last-image.png'
import logo from '../assets/Logo.png'
import './last.css'

const Last = () => {
  return (
    <Container className=' my-5'>
        <Row>
        <Col>
        <div className='last--image--div'>
            <img src={image}  className='last--image'/>
        </div>

            <p className='khurram text-white'>khurram</p>
            <div className='last--logo--lorem'>
                <img src={logo} alt=""  className=' last--logo'/>
            </div>
            <div className="last--main--p--div">

            <p className='last--main--p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perferendis amet nihil, ipsam, fuga sequi architecto iste repellat magnam saepe, incidunt soluta voluptate adipisci at.</p>
            </div>

        <div className='last--adress-mail--div d-flex align-items-center justify-content-center flex-column'>
            <div className=' d-flex align-items-center justify-content-center'>icon + <p className='last--address--p'>main road</p></div>
            <div className=' d-flex align-items-center justify-content-center'>icon + <p className='last--mail-p'> main road</p></div>
        </div>

        <div className=' last--copyright--div'>
            copyright icon 
            <img src="" alt="" className='last--copyright-icon' /> <p>
                COMPANY NAME 2023. ALL RIGHTS RESEREVED
            </p>
        </div>

        <div className='last--social-icons-div d-flex align-content-center justify-content-center'>
            social icon
            <img src="" alt="" className=' last--social-icon'/>

        </div>
        
        </Col>

        </Row>


    </Container>
  )
}

export default Last