import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Appointment = () => {
    return (
        <>
            <div className='ps-5 lh-lg text-white' style={{ height: '100px', background: '#90e0ef', textAlign: 'left' }}>
                <h1 >APPOINTMENT FORM</h1>
                <p>Happy Life With ______</p>
            </div>
            <form>
                <Container>
                    <form>
                        <Row sx={1} md={2} className="px-2">
                            <Col>
                                <input type="text" className='form-control my-3 p-3' placeholder='First Name' />
                                <input type="text" className='form-control my-3 p-3' placeholder='Email Address' />
                                <input type="date" className='form-control my-3 p-3' placeholder='Date Of Birth' />
                                <input type="date" className='form-control my-3 p-3' placeholder='Preferred Appointment Date' />
                            </Col>
                            <Col>
                                <input type="text" className='form-control my-3 p-3' placeholder='Last Name' />
                                <input type="text" className='form-control my-3 p-3' placeholder='Phone#' />
                                <input type="date" className='form-control my-3 p-3' placeholder='Select Your Appointment' />
                                <input type="date" className='form-control my-3 p-3' placeholder='Select Your Gender' />
                            </Col>
                        </Row>
                        <Row className="px-2">
                            <Col>
                                <input type="text" className='form-control my-3 p-3' name="" id="" placeholder='Subject/Brief Description' />
                            </Col>
                        </Row>
                        <Row className="px-2 my-3">
                            <Col>
                                <FloatingLabel controlId="floatingTextarea2" label="Type Your Message Details">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '250px' }}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className='px-3 my-3'>
                            <Col>
                                <input type="submit" className='form-control bg-primary p-2 text-white '/>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </form>
        </>
    );
};

export default Appointment;