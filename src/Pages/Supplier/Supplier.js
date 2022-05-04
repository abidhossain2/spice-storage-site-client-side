import React from 'react';
import './Supplier.css'

const Supplier = () => {
    return (
        <div className='supplier-container'>
            <div className='supplier-heading'>
                <h4>Our Suppliers</h4>
            </div>
            <div className='supplier-img-container'>
                <div className='supplier-image-box'>
                <img src="https://i.ibb.co/NssR5Df/image-removebg-preview-1.png" alt=""/>
                </div>
                <div className='supplier-image-box'>
                <img src="https://i.ibb.co/D4RWNSx/image.png" alt=""/>
                </div>
                <div className='supplier-image-box'>
                <img src="https://i.ibb.co/QD1THfC/image-removebg-preview.png" alt=""/>
                </div>
                <div className='supplier-image-box'>
                <img src="https://i.ibb.co/Ch8qRfY/image-removebg-preview-2.png" alt=""/>
                </div>
                
            </div>
        </div>
    );
};

export default Supplier;