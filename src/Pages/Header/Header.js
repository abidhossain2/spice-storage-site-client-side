import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiTwotoneFire } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const signout = () => {
        signOut(auth);
        navigate('/')
    }
    const navLinkStyle = ({isActive}) => {
        return{
            color: isActive ? 'orange' : 'white'
        }
    }
    return (
        <div className='header'>
            <div className='navigation-bar'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='menu-bar'>
                    <Container>
                        <Navbar.Brand className='heading' href="#home"> <span className='heading-txt_1'>Spice</span> <AiTwotoneFire className='fire-icon'></AiTwotoneFire> <span className='heading-txt_2'>Stoke</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <NavLink className='menu-link' to="/"  style={navLinkStyle}>Home</NavLink>
                                <NavLink className='manageitem' to='manageinventory' style={navLinkStyle}>Manage Item</NavLink>

                                {
                                    user && <NavLink className='add-inventory-item' to='addinventoryitem' style={navLinkStyle}>Add Item</NavLink>
                                }
                                {
                                    user && <NavLink className='my-items' to='myitems' style={navLinkStyle}>My Items</NavLink>
                                }
                                <NavLink className='menu-link' to="/register" style={navLinkStyle}>Register</NavLink>
                                {!user ? <NavLink className='menu-link' to="/login" style={navLinkStyle}>Login</NavLink> :
                                    <button className='signout-btn' onClick={signout}>Logout</button>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>

    );
};

export default Header;