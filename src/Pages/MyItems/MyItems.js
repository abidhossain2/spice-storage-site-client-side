import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';
import './MyItems.css'

const MyItems = () => {
    const [myItems, setMyitems] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        const email = user?.email;
        fetch(`http://localhost:5000/myitems?email=${email}`)
        .then(res => res.json())
        .then(data => {
            setMyitems(data)
        })
    }, [user?.email])
    return (
        <div className='my-items-container'>
            {
                myItems.map(myItem => <MyItem
                key={myItem._id}
                myItem={myItem}
                ></MyItem>)   
            }
        </div>
    );
};

export default MyItems;