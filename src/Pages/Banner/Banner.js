import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Supplier from '../Supplier/Supplier';
import './Banner.css'

const Banner = () => {
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        setSpinner(true);
        setTimeout(() => {
            setSpinner(false)
        }, 2000);
    }, [])
    return (
        <div>
            {
                spinner ?
                    <div className='loader'>
                        <Spinner animation="border" variant="warning" />
                    </div> :
                    <>
                        <Header></Header>
                        <div className='banner'>
                            <div className='header-txt'>
                                <h2>Primium Quality <br /> & <br /> Products</h2>
                            </div>
                        </div>
                        <div>
                            <Products></Products>
                        </div>
                        <div>
                            <Supplier></Supplier>
                        </div>
                        <div>
                            <AboutUs></AboutUs>
                        </div>
                        <div>
                            <Footer></Footer>
                        </div>
                    </>
            }
        </div>
    );
};

export default Banner;