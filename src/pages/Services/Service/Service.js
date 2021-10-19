import React from 'react';
import { Card, Col } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';

const Service = (props) => {
    const { id,img, name, description } = props.service; 
    const Description = description.slice(0, 150);

    return (
        <NavLink to={`/services/${id}`} style={{textDecoration:'none',color:'black' }} title={`Click here to see in detail about ${name}`}>
            <Col className='mt-3' >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className='text-secondary'>
                            {Description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </NavLink>
    );
};

export default Service;