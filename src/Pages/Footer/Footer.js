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
                    <p className='contact-txt'>Contact</p>
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
                    <p>Information</p>
                </div>
                <div className="footer-box">
                    <p>Branches</p>
                </div>
                <div className="footer-box">
                    <p>FAQs</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;