import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" >ProgrammingHeroHub</Navbar.Brand>
                    {/* <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav> */}
                </Container>
            </Navbar>
            <div>
                <h1 className=" text-primary">Total Modarator:100</h1>
                <strong> <small>Click multiple times to hire a HERO for multiple months</small> </strong>
            </div>
        </div>
    );
};

export default Header;