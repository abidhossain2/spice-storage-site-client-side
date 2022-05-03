import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Header></Header>
            <div className='banner'>
                <div className='header-txt'>
                    <h2>Primium Quality <br /> & <br /> Products</h2>
                </div>
            </div>
            <div>
                <Products></Products>
            </div>
        </div>
    );
};

export default Banner;