import React from 'react';
import { toast } from 'react-toastify';
import './AddInventoryItem.css'
import{useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Header from '../Header/Header';

const AddInventoryItem = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;
    const addItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const detail = e.target.detail.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        fetch(`https://spice-server-l1gh.onrender.com/products`, {
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
                e.target.reset();
            })

        fetch(`https://spice-server-l1gh.onrender.com/myitems`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, img, detail, price, quantity, supplier, email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Product added in my items')
                e.target.reset();
            })
    }
    return (
        <div>
            <Header></Header>
            <div className='form-container'>
                <h4>Product Information</h4>
                <form onSubmit={addItem}>
                    <input type="text" placeholder="Name" name="name" autoComplete='off' required /> <br />
                    <input type="text" placeholder="Image url" name="img" autoComplete='off' required /> <br />
                  
                    <textarea placeholder='Detail' name="detail"></textarea>
                     <br />

                    <input type="text" placeholder="Price" name="price" autoComplete='off' required /> <br />
                    <input type="text" placeholder="Quantity" name="quantity" autoComplete='off' required /> <br />
                    <input type="text" placeholder="Supplier" name="supplier" autoComplete='off' required /> <br />
                    <button className='add-inventory-btn'>Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddInventoryItem;