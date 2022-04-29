import React from 'react';
import './Product.css'
import {MdUpdate} from 'react-icons/md'
const Product = (props) => {
    const { name, img, detail, price, quantity, supplier } = props.product;
    return (
        <>
            <div className='product'>
                <img src={img} alt="" />
                <p className='name'><span>Name:</span> {name}</p>
                <p className='detail'>{detail}</p>
                <p className='price'><span>Price:</span> {price}</p>
                <p className='quantity'><span>Quantity:</span> {quantity}</p>
                <p className='supplier'><span>Supplier:</span> {supplier}</p>
                <button>Stoke Update <MdUpdate className='update-icon'></MdUpdate></button>
            </div>
        </>
    );
};

export default Product;