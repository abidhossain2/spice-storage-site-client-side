import React, {useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify'
import './Login.css'

const Login = () => {
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
        <div className='form-container'>
            <h4>Log In</h4>
            <form onSubmit={signUser}>
                <input type="email" placeholder="Email" value={email} onChange={handleEmail} required /> <br />
                <input type="password" placeholder="Password" value={password} onChange={handlePassword} required /> <br />
                <button className='register-btn'>Login</button>
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
        </div>
    </div>
);
};

export default Login;