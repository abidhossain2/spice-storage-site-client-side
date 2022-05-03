import React from 'react';
import useProducts from '../../Hook/useProducts';
import './ManageInventory.css'
import ManageProduct from '../ManageProduct/ManageProduct'
import { Link } from 'react-router-dom'
import Header from '../Header/Header';

const ManageInventory = () => {
    const [products] = useProducts();
    return (
        <>
        <Header></Header>
        <div className='manage-item-container'>
            <div className='add-new-item'>
                <Link to='/addinventoryitem' className='manage-link'>Add New Item</Link>
            </div>
            <div>
                {
                    products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                    ></ManageProduct>)
                }
            </div>
        </div>
        </>
    );
};

export default ManageInventory;