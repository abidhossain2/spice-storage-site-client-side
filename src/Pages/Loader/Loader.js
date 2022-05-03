import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.css'

const Loader = () => {
    return (
        <div className='loader-container'>
            <div className='loader'>
                <Spinner animation="grow" role="status">

                </Spinner>
            </div>
        </div>
    );
};

export default Loader;