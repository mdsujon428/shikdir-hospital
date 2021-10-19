import React from 'react';
import { Card, Col } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';

const Service = (props) => {
    const { id,img, name, description } = props.service; 
    const Description = description.slice(0, 150);

    return (
       
            <Col className='mt-3' >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className='text-secondary'>
                            {Description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <NavLink to={`/services/${id}`} style={{textDecoration:'none',color:'black' }} className='btn btn-primary' title={`Click here to see in detail about ${name}`}>See in details</NavLink>
                    </Card.Footer>
                </Card>
            </Col>
        
    );
};

export default Service;