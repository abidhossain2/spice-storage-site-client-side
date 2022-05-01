import React from 'react';
import './AddInventoryItem.css'

const AddInventoryItem = () => {

    const addItem = (e) => {
        e.preventDefault();
        const productName = e.target.name.value;
        const productImg = e.target.img.value;
        const productDetail = e.target.detail.value;
        const productPrice = e.target.price.value;
        const productQuantity = e.target.quantity.value;
        const productSupplier = e.target.supplier.value;

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({productName, productImg,productDetail, productPrice,productQuantity,productSupplier})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <div className='form-container'>
                <h4>Product Information</h4>
                <form onSubmit={addItem}>
                    <input type="text" placeholder="Name" name="name"  autoComplete='off'/> <br />
                    <input type="text" placeholder="Image url" name="img"  autoComplete='off'/> <br />
                    <input type="text" placeholder="Detail" name="detail"  autoComplete='off'/> <br />
                    <input type="text" placeholder="Price" name="price"  autoComplete='off'/> <br />
                    <input type="text" placeholder="Quantity" name="quantity"  autoComplete='off'/> <br />
                    <input type="text" placeholder="Supplier" name="supplier"  autoComplete='off'/> <br />
                    <button className='add-btn'>Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddInventoryItem;