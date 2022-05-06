import React, { useState } from 'react';
import { useAuthState, useSendEmailVerification, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify'
import { IoLogoGoogle } from 'react-icons/io'
import './Login.css'
import Header from '../Header/Header';
import { HiLockClosed } from 'react-icons/hi'
import { BsEnvelopeFill } from 'react-icons/bs'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || '/';
    const [verifyEmail] = useSendEmailVerification(auth)
    const [googleSignin] = useSignInWithGoogle(auth)
    const [error, setError] = useState('')
    const googleSign = async () => {
        await googleSignin();
        await verifyEmail();
        toast('Verify email sent')
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

    const [resetPassword] = useSendPasswordResetEmail(auth)
    const signUser = e => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
                .catch(err => {
                    let errorCode = err.code.split("auth/")[1]
                    setError(errorCode)
                })
        }
    }



    return (
        <div>
            <Header></Header>
            <div className='login-form-container'>
                <h4>Log In</h4>
                {error !== "" ? <Alert  variant={'danger'}>
                        {error.toUpperCase()}
                    </Alert> : null}
                <form onSubmit={signUser}>

                    <div className='login-email-container'>
                        <div className='login-icon-container'>
                            <BsEnvelopeFill className='user-icon'></BsEnvelopeFill>
                        </div>
                        <div className="email-input-container">
                            <input className='email-input' type="email" placeholder="Email" value={email} onChange={handleEmail} required />
                        </div>
                    </div> <br />
                    <div className='login-pass-container'>
                        <div className='login-icon-container'>
                            <HiLockClosed className='user-icon'></HiLockClosed>
                        </div>
                        <div className="pass-input-container">
                            <input className='pass-input' type="password" placeholder="Password" value={password} onChange={handlePassword} required />
                        </div>
                    </div> <br />
                   
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