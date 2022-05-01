import React, { useState } from 'react';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const backToHome = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const handleName = e => {
        e.preventDefault();
        setName(e.target.value)
    }
    const handleEmail = e => {
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        e.preventDefault();
        setPassword(e.target.value)
    }
    const handleConfirmPassword = e => {
        e.preventDefault();
        setConfirmPassword(e.target.value)
    }
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const createNewUser = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        backToHome('/')
    }
    return (
        <div className='form-container'>
            <h4>Register</h4>
            <form onSubmit={createNewUser}>
                <input type="text"  placeholder="Name" value={name} onChange={handleName} required/> <br />
                <input type="email" placeholder="Email" value={email} onChange={handleEmail} required/> <br />
                <input type="password" placeholder="Password" value={password} onChange={handlePassword} required/> <br />
                <input type="password" placeholder="Confirm password" value={confirmpassword} onChange={handleConfirmPassword} required/> <br />
                <button className='register-btn'>Register</button>
            </form>
            <div className='exist-login'>
                <span>Already have an accout</span>
                <Link to='/login' className='login-link'>Login</Link>
            </div>
        </div>
    );
};

export default Register;