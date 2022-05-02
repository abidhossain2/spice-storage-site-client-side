import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import {AiTwotoneFire} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const signout = () =>{
        signOut(auth);
        navigate('/')
    }
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
                                 {
                                     user&& <Link className='manageitem' to='manageinventory'>Manage Item</Link>
                                    }
                                 {
                                     user&& <Link className='add-inventory-item' to='addinventoryitem'>Add Item</Link>
                                    }
                                 {
                                     user&& <Link className='my-items' to='myitems'>My Items</Link>
                                    }
                                <Link className='menu-link' to="/register">Register</Link>
                                    {!user? <Link className='menu-link' to="/login">Login</Link> : 
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