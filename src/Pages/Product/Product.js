import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, detail, price, quantity, supplier} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='name'>Name: {name}</p>
            <p className='detail'>{detail}</p>
            <p className='price'>Price: {price}</p>
            <p className='quantity'>Quantity: {quantity}</p>
            <p className='supplier'>Supplier: {supplier}</p>
        </div>
    );
};

export default Product;