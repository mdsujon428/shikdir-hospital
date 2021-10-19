import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch(`doctors.json`)
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    // console.log(doctors)
    return (
        <Container className="my-3">
            <Row>
                <Col className="overflow-auto">
                    <Table  striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Degree</th>
                                <th>Designation</th>
                                <th>institution</th>
                                <th>Room</th>
                                <th>Block</th>
                                <th>Time</th>
                                <th>Serile Day</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors.map(doctor=> <Doctor key={doctor.id} doctor={doctor}> </Doctor>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Doctors;