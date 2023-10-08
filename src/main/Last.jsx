import { Container, Row, Col } from 'react-bootstrap'
import image from '../assets/lastImage.png'
import logo from '../assets/Logo.png'
import './last.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
const Last = () => {
    return (
        <Container className=' my-5'>
            <Row>
                <Col className=' h-100'>
                    <div className='last--image--div'
                        style={{
                            position: 'relative',
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '500px', // Adjust the height as needed
                            zIndex: 555,
                            // filter: 'brightness(50%)',

                        }}
                   
                     >
                        {/* <img src={image} className='last--image' /> */}
                        <div className='last--logo--lorem'>
                            <img src={logo} alt="" className=' last--logo' />
                        </div>
                        <div className="last--main--p--div">

                            <p className='last--main--p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perferendis amet nihil, ipsam, fuga sequi architecto iste repellat magnam saepe, incidunt soluta voluptate adipisci at.</p>
                        </div>

                        <p className='last--copy--para'>&copy; 2023 Company Name. All Rights Reserved.</p>


                        <div className='last--adress-mail--div '>
                            <div className=' d-flex align-items-center justify-content-center last--icon--div1'><LocationOnIcon
                                style={{
                                    fontSize: '30px',
                                    marginRight: '10px',
                                }} /> <p className='last--address--p mb-0 text-white'> MAIN ROAD, BUILDING NAME, COUNTRY</p></div>
                            <div className=' d-flex align-items-center justify-content-center last--icon--div2'><MailIcon style={{
                                fontSize: '30px',
                                marginRight: '10px',
                            }} /><p className='last--mail-p mb-0 text-white'> NFO@COMPANYNAME.COM</p></div>
                        </div>

                        <div className='last--social-icons--div '>
                            <InstagramIcon style={{
                                color: 'black',
                                backgroundColor: "white",
                                borderRadius: '50%',
                                width: '25px',
                                height: '25px',
                                padding: "3px",
                                margin: "0 5px",
                            }} />
                            <FacebookIcon style={{
                                color: 'black',
                                backgroundColor: "white",
                                borderRadius: '50%',
                                width: '25px',
                                height: '25px',
                                padding: "3px",
                                margin: "0 5px",

                            }} />
                            <TwitterIcon style={{
                                color: 'black',
                                backgroundColor: "white",
                                borderRadius: '50%',
                                width: '25px',
                                height: '25px',
                                padding: "3px",
                                margin: "0 5px",

                            }} />
                            <WhatsAppIcon style={{
                                color: 'black',
                                backgroundColor: "white",
                                borderRadius: '50%',
                                width: '25px',
                                height: '25px',
                                padding: "3px",
                                margin: "0 5px",

                            }} />

                        </div>

                    </div>
                </Col>

            </Row>


        </Container>
    )
}

export default Last