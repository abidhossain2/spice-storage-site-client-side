import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify'
import {IoLogoGoogle} from 'react-icons/io'
import './Login.css'
import Header from '../Header/Header';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || '/';
    const [googleSignin] = useSignInWithGoogle(auth)
    const googleSign = () => {
        googleSignin();
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail = e => {
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        e.preventDefault();
        setPassword(e.target.value)
    }
    const [login] = useSignInWithEmailAndPassword(auth);
    const [resetPassword] = useSendPasswordResetEmail(auth)
    const signUser = e => {
        e.preventDefault();
        login(email, password);

    }


    return (
        <div>
            <Header></Header>
            <div className='form-container'>
                <h4>Log In</h4>
                <form onSubmit={signUser}>
                    <input type="email" placeholder="Email" value={email} onChange={handleEmail} required /> <br />
                    <input type="password" placeholder="Password" value={password} onChange={handlePassword} required /> <br />
                    <button className='login-btn'>Login</button>
                </form>
                <div className='reset-pass'>
                    <span className='reset-pass-link' onClick={async () => {
                        await resetPassword(email)
                        toast('Reset email sent')
                    }
                    }>Forgot password</span>
                </div>
                <div className='reset-pass'>
                    <span>Don't have an account?</span>
                    <Link to='/register' className='reg-link'>Register</Link>
                </div>
                <div className='line-container'>
                    <div className='line-1'></div> <div className='or'>or</div> <div className='line-2'></div>
                </div>
                <div>
                    <button className='google-btn' onClick={googleSign}><IoLogoGoogle className='google-icon'></IoLogoGoogle>Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;