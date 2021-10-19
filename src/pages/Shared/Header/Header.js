import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Header = () => {
    const {user,SignOut} = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark sticky">
                <Container>
                    <Navbar.Brand href="#home">Shikdir Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/appointment">APPOINTMENT FORM</Nav.Link>
                        </Nav>
                              {user?.email?
                                  <Button onClick={SignOut}>SigOut </Button>
                                  :
                                  <Nav.Link as={Link} to='/signin'>Sign In</Nav.Link>
                              }
                            <Navbar.Text eventKey={2} style={{color:'Orange'}}>
                               {user?.displayName || user?.email}
                            </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;