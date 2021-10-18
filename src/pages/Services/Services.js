import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])
    return (
        <>
            <h1 className='ps-5 lh-lg text-white' style={{ height: '100px', background: '#90e0ef', textAlign: 'left' }}>Our Services</h1>
            <Container className="my-3">
                <Row xs={1} md={3}>
                    {
                        services.map(service => <Service key={service.id} service={service}> </Service>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Services;