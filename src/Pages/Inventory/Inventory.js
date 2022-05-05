import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Inventory.css'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const Inventory = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [amount, setAmount] = useState('')
    const [isActive, setIsActive] = useState(false)
    const backToHome = useNavigate();
    const handlePrevious = () => {
        backToHome('/')
    }
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handleQuantityDecrease = () => {
        const quantity = parseInt(product.quantity);
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
        window.location.reload();
        toast('Successfully Delivered')
    }
    const handleIncrease = e => {
        e.preventDefault();
        const newQuantity = parseInt(amount);
        const quantity = parseInt(product.quantity);
        const newAmount = newQuantity + quantity;
        console.log(newAmount);
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newAmount })

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
        window.location.reload();
        toast('Successfully Updated')
    }




    return (
        <>
            <button className='back-btn' title='Back to home' onClick={handlePrevious}><MdOutlineKeyboardBackspace className='back-icon'></MdOutlineKeyboardBackspace></button>
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
                    <button className='deliver-btn' onClick={handleQuantityDecrease}>Deliver</button>
                    
                        <button className='deliver-btn' onClick={e => setIsActive(!isActive)}>Restoke</button>
                        {
                            isActive && (
                               
                                    <form onSubmit={handleIncrease} className='add-container'>
                                        <input className='add-input' placeholder='Quantity' type="text" value={amount} onChange={e => setAmount(e.target.value)} /> <br />

                                        <button className='add-btn'>Add</button>
                                    </form>
                                
                            )
                        }
                </div>
            </div>
            <div className='store'>
                <Link to='/manageinventory' className='store-btn'>Manage Inventories</Link>
            </div>
        </>
    );
};

export default Inventory;