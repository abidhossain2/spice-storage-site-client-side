import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AddInventoryItem.css'
import {BiArrowBack} from 'react-icons/bi'

const AddInventoryItem = () => {
    const previousPage = useNavigate();
    const backToPrevious = () => {
        previousPage(-1)
    }
    const addItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const detail = e.target.detail.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, img, detail, price, quantity, supplier })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('New item added')
            })
    }
    return (
        <div>
            <button onClick={backToPrevious} className='back-btn' title='back to previous page'><BiArrowBack className='back-icon'></BiArrowBack></button>
            <div className='form-container'>
                <h4>Product Information</h4>
                <form onSubmit={addItem}>
                    <input type="text" placeholder="Name" name="name" autoComplete='off' required /> <br />
                    <input type="text" placeholder="Image url" name="img" autoComplete='off' required /> <br />
                    <input type="text" placeholder="Detail" name="detail" autoComplete='off' required /> <br />
                    <input type="text" placeholder="Price" name="price" autoComplete='off' required /> <br />
                    <input type="text" placeholder="Quantity" name="quantity" autoComplete='off' required /> <br />
                    <input type="text" placeholder="Supplier" name="supplier" autoComplete='off' required /> <br />
                    <button className='add-btn'>Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddInventoryItem;