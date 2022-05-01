import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handleQuantity = () => {
        window.location.reload();
        toast('Successfully Delivered')
        const quantity = product.quantity;
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }



    return (
        <>
            <div className='product-container'>
                <div className='product-img'>
                    <img src={product.img} alt="" />
                </div>
                <div className='product-description'>
                    <p className='product-name'>Name: {product.name}</p>
                    <p className='product-detail'>{product.detail}</p>
                    <p className='product-price'>Price: {product.price}</p>
                    <p className='product-quantity'>Quantity: {product.quantity} kg</p>
                    <p className='product-supplier'>Supplier: {product.supplier}</p>
                    <button className='deliver-btn' onClick={handleQuantity}>Deliver</button>
                </div>
            </div>
            <div className='manage'>
                <Link to='/manageinventory' className='manage-btn'>Manage Inventories</Link>
            </div>
        </>
    );
};

export default Inventory;