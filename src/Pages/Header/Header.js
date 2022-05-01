import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import {AiTwotoneFire} from 'react-icons/ai'
import { Link } from 'react-router-dom';
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
                                <Link className='menu-link' to="/">Home</Link>
                                <Link className='menu-link' to="/login">Login</Link>
                                <Link className='menu-link' to="/register">Register</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>

    );
};

export default Header;