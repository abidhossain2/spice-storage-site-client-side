import React, { useState, useEffect } from 'react';
import './Register.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { RiUser3Fill } from 'react-icons/ri'
import { BsEnvelopeFill } from 'react-icons/bs'
import { HiLockClosed } from 'react-icons/hi'
import { toast } from 'react-toastify';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap'

const Register = () => {
    const backToHome = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [validPass, setValidPass] = useState('');
    const [matchPass, setMatchPass] = useState('');
    const [errMsg, setErrMsg] = useState("")
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        setSpinner(true);
        setTimeout(() => {
            setSpinner(false)
        }, 2000);
    }, [])
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
        setPassword(e.target.value);
        if (password < 6) {
            setValidPass('password must be 6 characters');
        } else {
            setValidPass('')
        }
    }
    const validation = e => {
        e.preventDefault();
        setConfirmPassword(e.target.value)
        if (password == confirmpassword) {
            setMatchPass('Confirm password should be same as password')
        } else {
            setMatchPass("")

        }

    }

    const [verifyEmail] = useSendEmailVerification(auth)
    const createNewUser = e => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            try {
                createUserWithEmailAndPassword(auth, email, password)
                verifyEmail()
                toast('Verify email sent')
                backToHome('/')
            } catch (error) {
                let errorCode = error.code.split("auth/")[1]
                setErrMsg(errorCode)
            }
        }
    }

    return (
        <div>
            {
                spinner ?
                    <div className='loader'>
                        <Spinner animation="border" variant="warning" />
                    </div>
                    :
                    <>
                        <Header></Header>
                        <div className='reg-form-container'>
                            <h4>Register</h4>
                            <form onSubmit={createNewUser} className='reg-form'>
                                <div className='name-field-container'>
                                    <div className='icon-container'>
                                        <RiUser3Fill className='user-icon'></RiUser3Fill>
                                    </div>
                                    <div className='name-field'>
                                        <input type="text" placeholder="Name" value={name} onChange={handleName} required />
                                    </div>
                                </div> <br />
                                <div className='email-field-container'>
                                    <div className='icon-container'>
                                        <BsEnvelopeFill className='user-icon'></BsEnvelopeFill>
                                    </div>
                                    <div className="email-field">
                                        <input type="email" placeholder="Email" value={email} onChange={handleEmail} required />
                                    </div>
                                </div> <br />
                                <div className='pass-field-container'>
                                    <div className='icon-container'>
                                        <HiLockClosed className='user-icon'></HiLockClosed>
                                    </div>
                                    <div className="pass-field">
                                        <input type="password" placeholder="Password" value={password} onChange={handlePassword} required />
                                    </div>
                                </div> <br /> {validPass}
                                <div className='confirm-pass-field-container'>
                                    <div className='icon-container'>
                                        <HiLockClosed className='user-icon'></HiLockClosed>
                                    </div>
                                    <div className="confirm-pass-field">
                                        <input type="password" placeholder="Confirm password" value={confirmpassword} onChange={(e) => validation(e)} required />
                                    </div>
                                </div> <br /> {matchPass}
                                {errMsg !== "" ? <p>{errMsg}</p> : null}
                                <button className='register-btn'>Register</button>
                            </form>
                            <div className='exist-login'>
                                <span>Already have an account?</span>
                                <Link to='/login' className='login-link'>Login</Link>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Register;