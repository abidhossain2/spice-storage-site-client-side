import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';

const ProtectedRoute = ({children}) => {
    const [user, loader] = useAuthState(auth);
    const location = useLocation();
    if(loader){
       return <Loader></Loader>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace />
    }
    return children;
};

export default ProtectedRoute;