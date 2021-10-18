import React from 'react';
import Banner from '../Banner/Banner';
import Schedule from '../Schedule/Schedule';
import Patients from './Patients/Patients';
import ServicesDepartments from './Services&Departments/ServicesDepartments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Schedule></Schedule>
            <ServicesDepartments></ServicesDepartments>
            <Patients></Patients>
        </div>
    );
};

export default Home;