import React from 'react';
import Header from '../Header/Header';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <Header></Header>
            <div className='header-txt'>
                <h2>Primium Quality <br /> & <br /> Products</h2>
            </div>
        </div>
    );
};

export default Banner;