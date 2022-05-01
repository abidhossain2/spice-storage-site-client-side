import React from 'react';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const createUser = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    }
    return (
        <div>
            <form onSubmit={createUser}>
                <input type="text" name="name" placeholder="Name" /> <br />
                <input type="email" name="email" placeholder="Email" /> <br />
                <input type="password" name="password" placeholder="Password" /> <br />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;