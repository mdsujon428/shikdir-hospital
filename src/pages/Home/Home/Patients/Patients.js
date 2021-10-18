import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import patient1 from '../../../../images/happy-patients/happy-patient-1.jpg'
import patient2 from '../../../../images/happy-patients/happy-patient-2.jpg'
import patient3 from '../../../../images/happy-patients/happy-patient-1.jpg'

const Patients = () => {
    return (
        <Container className="mb-5">
            <p className='fs-4 text-secondary'> What Our <span style={{color:'black',fontWeight:'400'}}>Patients Are Saying</span></p>
            <Carousel>
                <Carousel.Item>
                    <Row xs={1} md={2}>
                        <Col className='d-flex justify-content-center'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{ borderRadius: '120%' }} src={patient1} />
                                <Card.Body>
                                    <Card.Text>
                                        Hanif
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <div className='p-5'>
                                <Card.Text style={{fontStretch:"expanded"}}>
                                    Announcer: Medical news and research from the University of Utah physicians and specialists you can use for a happier and healthier life. You're listening to The Scope.
                                    Dr. Lee: Hello, everyone. Welcome to the show. I'm Dr. Vivian Lee, Senior Vice President for Health Sciences at the University of Utah, and today my guest is Dr. Tom Miller, who's the Chief Medical Officer at the University of Utah Hospital and Clinic. Welcome to the show.
                                </Card.Text>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row xs={1} md={2}>
                        <Col className='d-flex justify-content-center'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{ borderRadius: '120%' }} src={patient2} />
                                <Card.Body>
                                    <Card.Text>
                                        Hanif
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <div className='p-5'>
                                <Card.Text>
                                    Announcer: Medical news and research from the University of Utah physicians and specialists you can use for a happier and healthier life. You're listening to The Scope.
                                    Dr. Lee: Hello, everyone. Welcome to the show. I'm Dr. Vivian Lee, Senior Vice President for Health Sciences at the University of Utah, and today my guest is Dr. Tom Miller, who's the Chief Medical Officer at the University of Utah Hospital and Clinic. Welcome to the show.
                                </Card.Text>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row xs={1} md={2}>
                        <Col className='d-flex justify-content-center'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{ borderRadius: '120%' }} src={patient3} />
                                <Card.Body>
                                    <Card.Text>
                                        Hanif
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <div className='p-5'>
                                <Card.Text>
                                    Announcer: Medical news and research from the University of Utah physicians and specialists you can use for a happier and healthier life. You're listening to The Scope.
                                    Dr. Lee: Hello, everyone. Welcome to the show. I'm Dr. Vivian Lee, Senior Vice President for Health Sciences at the University of Utah, and today my guest is Dr. Tom Miller, who's the Chief Medical Officer at the University of Utah Hospital and Clinic. Welcome to the show.
                                </Card.Text>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>

                
            </Carousel>

        </Container>
    );
};

export default Patients;