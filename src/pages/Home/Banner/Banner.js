import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="http://docmortgages.com/wp-content/uploads/2016/09/Group-of-Doctors-1024x413.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="bg-danger d-inline ">WE DO TEH BEST PRACTICE <br/> <br/> BEST FEATURE</h3> 
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.amzhospitalbd.com/uploads/department/-1531939350-General-Medicine-min.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="d-inline bg-primary">WE ARE RESPONSIBLE FINEST CLINICAL TEAM</h3>     
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://embed.widencdn.net/img/veritas/4qdmeht1ts/1200x630px/doctor-specialists.jpg?u=at8tiu&use=d502n&k=c"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>WE DO TEH BEST PRACTICE <br/> BEST FEATURE</h3>      
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;