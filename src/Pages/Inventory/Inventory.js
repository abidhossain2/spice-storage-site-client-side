import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hook/useProducts';
import useSingleProduct from '../../Hook/useSingleProduct';
import './Inventory.css'

const Inventory = () => {
    const { _id } = useParams()
    const [products, setProducts] = useProducts();
    const [product] = useSingleProduct(_id);
    useEffect(() => {
        const product = products.filter(product => parseInt(product._id) === parseInt(_id))
        setProducts(product)
    }, [_id, products, setProducts])
    return (
        <div className='product-container'>
            <div className='product-img'>
                <img src={product.img} alt="" />
            </div>
            <div className='product-description'>
                <p className='product-name'>Name: {product.name}</p>
                <p className='product-detail'>{product.detail}</p>
                <p className='product-price'>Price: {product.price}</p>
                <p className='product-quantity'>Quantity: {product.quantity}</p>
                <p className='product-supplier'>Supplier: {product.supplier}</p>
            </div>
        </div>
    );
};

export default Inventory;