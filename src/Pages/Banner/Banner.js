import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <Header></Header>
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