import React from 'react';
import useProducts from '../../Hook/useProducts';
import './ManageInventory.css'
import ManageProduct from '../ManageProduct/ManageProduct'
import {Link} from 'react-router-dom'
const ManageInventory = () => {
    const [products] = useProducts();
    return (
        <>
        <div className='add-new'>
            <Link to=''>Add New Item</Link>
        </div>
            <div>
                {
                    products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                    ></ManageProduct>)
                }
            </div>
        </>
    );
};

export default ManageInventory;