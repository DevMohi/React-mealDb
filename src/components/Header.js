import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container >
                <Navbar.Brand href="#home">MealDB</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;