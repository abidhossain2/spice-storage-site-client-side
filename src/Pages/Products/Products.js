import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hook/useProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProducts();
    return (
        <div className='products-section'>
            <div className='products-heading'>
                <h2>Products</h2>
            </div>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>).slice(0,6)
                }
            </div>
            <div className='manage'>
                <Link to='manageinventory' className='manage-btn'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Products;
