import React, { useState } from 'react';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const backToHome = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const createNewUser = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        backToHome('/')
    }
    return (
        <div>
            <form onSubmit={createNewUser}>
                <input type="text"  placeholder="Name" value={name} onChange={handleName}/> <br />
                <input type="email" placeholder="Email" value={email} onChange={handleEmail}/> <br />
                <input type="password" placeholder="Password" value={password} onChange={handlePassword}/> <br />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;