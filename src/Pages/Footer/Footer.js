import React from 'react';
import './Footer.css'
import { TiLocation } from 'react-icons/ti'
import { RiPhoneFill } from 'react-icons/ri'
import { FaFax } from 'react-icons/fa'
import { BsEnvelopeFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-info-box'>
                <div className="footer-box">
                    <p className='footer-heading-txt'>Contact</p>
                    <div className='location-container'>
                        <div>
                            <TiLocation className='location-icon'></TiLocation>
                        </div>
                        <div className='location'>
                            <p>Bhanugach Road, Moulvibazar</p>
                        </div>
                    </div>
                    <div className='mobile-container'>
                        <div>
                            <RiPhoneFill className="mobile-icon"></RiPhoneFill>
                        </div>
                        <div className='mobile'>
                            <p>01712233445</p>
                        </div>
                    </div>
                    <div className='phone-container'>
                        <div>
                            <FaFax className="phone-icon"></FaFax>
                        </div>
                        <div className='phone'>
                            <p>8946532</p>
                        </div>
                    </div>
                    <div className='envelop-container'>
                        <div>
                            <BsEnvelopeFill className="envelop-icon"></BsEnvelopeFill>
                        </div>
                        <div className='envelop'>
                            <p>spice@stoke.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <p className='footer-heading-txt'>Information</p>

                    <p className='footer-info-txt'>About us</p>
                    <p className='footer-info-txt'>Product Information</p>
                    <p className='footer-info-txt'>Privacy Policy</p>
                    <p className='footer-info-txt'>Terms & condition</p>
                    <p className='footer-info-txt'>Site Map</p>
                </div>
                <div className="footer-box">
                    <p className='footer-heading-txt'>Branches</p>
                    <p className='footer-info-txt'>Dhaka</p>
                    <p className='footer-info-txt'>Chittagong</p>
                    <p className='footer-info-txt'>Rajshahi</p>
                    <p className='footer-info-txt'>Bogra</p>
                    <p className='footer-info-txt'>Mymensingh</p>
                </div>
                <div className="footer-box">
                    <p className='footer-heading-txt'>FAQs</p>
                    <p className='footer-info-txt'>How does privacy work?</p>
                    <p className='footer-info-txt'>What other services are compatible with?</p>
                    <p className='footer-info-txt'>What is the quality of products?</p>
                </div>
            </div>
            <p className='copy-right'>Copyright &copy; spiceStoke 2022</p>
        </div>
    );
};

export default Footer;