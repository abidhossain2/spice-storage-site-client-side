import React from 'react';
import './Product.css'
import {MdUpdate} from 'react-icons/md'
import { useNavigate} from 'react-router-dom';

const Product = (props) => {
    const { _id, name, img, detail, price, quantity, supplier } = props.product;
    const navigate = useNavigate();
    const handleInventory = () => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <>
            <div className='product'>
                <img src={img} alt="" />
                <p className='name'><span>Name:</span> {name}</p>
                <p className='detail'>{detail}</p>
                <p className='price'><span>Price:</span> {price}</p>
                <p className='quantity'><span>Quantity:</span> {quantity} kg</p>
                <p className='supplier'><span>Supplier:</span> {supplier}</p>
                <button  onClick={handleInventory}>Stoke Update <MdUpdate className='update-icon'></MdUpdate></button>
            </div>
        </>
    );
};

export default Product;