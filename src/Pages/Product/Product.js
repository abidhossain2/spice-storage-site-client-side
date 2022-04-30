import React from 'react';
import './Product.css'
import {MdUpdate} from 'react-icons/md'
import { Link} from 'react-router-dom';

const Product = (props) => {
    const { name, img, detail, price, quantity, supplier,_id } = props.product;
    return (
        <>
            <div className='product'>
                <img src={img} alt="" />
                <p className='name'><span>Name:</span> {name}</p>
                <p className='detail'>{detail}</p>
                <p className='price'><span>Price:</span> {price}</p>
                <p className='quantity'><span>Quantity:</span> {quantity}</p>
                <p className='supplier'><span>Supplier:</span> {supplier}</p>
                {/* <button onClick={()=>handleInventory(_id)}>Stoke Update <MdUpdate className='update-icon'></MdUpdate></button> */}
                <Link to={`/inventory/${_id}`}>Stoke Update <MdUpdate className='update-icon'></MdUpdate></Link>
            </div>
        </>
    );
};

export default Product;