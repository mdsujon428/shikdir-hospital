import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Schedule.css'
import { Col, Container, Row } from 'react-bootstrap';

const Schedule = () => {
    return (
        <Container className='w-80 p-5'>
            <Row className="row-bg-color">
                <Col md={6} sm={12}>
                    <p className="text-white fs-2">Need a Doctor for Check-up</p>
                    <h2 className="text-white">UST MAKE AN APPOINTMENT</h2>
                    <Button className="outline-white bg-primary rounded-3 text-white p-2 ">GET AND APPOINTMENT</Button>
                </Col>
                <Col md={6} sm={12}>
                    <h2 className="text-white">OPENING HOURS</h2>
                    <p className="text-white">  Monday-Friday -------08:00am-10:00pm</p>
                    <p className="text-white">  Saturday-Sunday------ 09:00am-06:00pm</p>
                    <p className="text-white">  Emergency Services ----- 24 hours Open</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Schedule;