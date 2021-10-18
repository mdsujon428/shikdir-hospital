import React from 'react';
import './Footer.css';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    // library.add(faFacebookF)
    const facebook = <FontAwesomeIcon style={{ color: 'orange' }} icon={faFacebook} />
    const twitter = <FontAwesomeIcon style={{ color: 'orange' }} icon={faTwitter} />
    const youtube = <FontAwesomeIcon style={{ color: 'orange' }} icon={faYoutube} />
    const messenger = <FontAwesomeIcon style={{ color: 'orange' }} icon={faFacebookMessenger} />

    return (
        <div className="footer-container bg-dark w-100 ">
            <Row xs={1} md={2} className='text-white d-flex justify-content-between'>
                <Col style={{ width: '500px' }}>
                    <div >
                        <div>
                            <h3>About HealthCare Agency</h3>
                        </div>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div>
                            <h4>Contact with us </h4>
                            <ul style={{ textDecoration: 'none', listStyle: 'none', fontSize: '16px', }}>
                                <li>{facebook}  <span style={{ marginLeft: '5px' }}>Connect with us in Facebook </span> </li>
                                <li>{twitter}  <span style={{ marginLeft: '5px' }}>Connect with us in Twitter </span> </li>
                                <li>{youtube}  <span style={{ marginLeft: '5px' }}>Connect with us in Youtube </span> </li>
                                <li>{messenger}  <span style={{ marginLeft: '5px' }}>Connect with us in Messenger </span> </li>
                            </ul>
                        </div>

                    </div>
                </Col>
                <Col>
                    <div >
                        <h2 className="text-white">OPENING HOURS</h2>
                        <p className="text-white">  Monday-Friday -------08:00am-10:00pm</p>
                        <p className="text-white">  Saturday-Sunday------ 09:00am-06:00pm</p>
                        <p className="text-white">  Emergency Services ----- 24 hours Open</p>

                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default Footer;