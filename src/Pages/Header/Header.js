import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import {AiTwotoneFire} from 'react-icons/ai'
const Header = () => {
    return (
        <div className='header'>
            <div className='navigation-bar'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='menu-bar'>
                    <Container>
                        <Navbar.Brand className='heading' href="#home"> <span className='heading-txt_1'>Spice</span> <AiTwotoneFire  className='fire-icon'></AiTwotoneFire> <span className='heading-txt_2'>Stoke</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>

    );
};

export default Header;