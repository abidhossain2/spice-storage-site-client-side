import React from 'react';
import { toast } from 'react-toastify';
import './MyItem.css'

const MyItem = (props) => {
    const { name, detail, price, quantity, img, supplier, _id } = props.myItem;

    const myItemDelete = () => {
        fetch(`https://spice-server-l1gh.onrender.com/myitems/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const confirmMsg = window.confirm("Are you sure to delete");
                if (confirmMsg) {
                    window.location.reload();
                    toast('Successfully Deleted')
                }
            })
    }
    return (
        <div>
            <div className='my-item-container'>
                <img className='my-item-img' src={img} alt="" />
                <p className='name'>Name: {name}</p>
                <p className='detail'>{detail}</p>
                <p className='price'>Price: {price}</p>
                <p className='quantity'>Quantity: {quantity} kg</p>
                <p className='supplier'>Supplier: {supplier}</p>
                <button className='myitem-delete-btn' onClick={() => myItemDelete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default MyItem;