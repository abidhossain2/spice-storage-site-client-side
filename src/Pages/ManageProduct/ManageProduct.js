import React from 'react';
import './ManageProduct.css'
import {TiDelete} from 'react-icons/ti'

const ManageProduct = (props) => {
    const { img, price, quantity, name } = props.product;
    return (
        <>
            <div className='manage-product-container'>
                <div className='img-container'>
                    <img className='product-image' src={img} alt="" />
                </div>
                <div>
                    <p>Name: {name}</p>
                </div>
                <div>
                    <p>Price: {price}</p>
                </div>
                <div>
                    <p>Quantity: {quantity} kg</p>
                </div>
                <div>
                    <TiDelete className='delete-icon'></TiDelete>
                </div>
            </div>
        </>
    );
};

export default ManageProduct;