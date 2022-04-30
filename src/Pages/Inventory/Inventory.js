import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hook/useProducts';
import useSingleProduct from '../../Hook/useSingleProduct';

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
                <p>Name: {product.name}</p>
                <p>{product.detail}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Supplier: {product.supplier}</p>
            </div>
        </div>
    );
};

export default Inventory;