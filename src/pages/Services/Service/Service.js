import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {img,name,description} = props.service;
    const Description = description.slice(0,150);
    return (
        <Col className='mt-3' >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {Description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;