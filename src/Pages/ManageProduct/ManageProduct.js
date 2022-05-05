import React from 'react';
import './ManageProduct.css'
import { TiDelete } from 'react-icons/ti'
import { toast } from 'react-toastify'
import useProducts from '../../Hook/useProducts';
// import Header from '../Header/Header';

const ManageProduct = (props) => {
    const { img, price, quantity, name, _id } = props.product;
    const [products, setProducts] = useProducts()
    const deleteItem =  (id) => {

        fetch(`http://localhost:5000/inventory/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const confirmBox = window.confirm('Are you sure to delete?')
                if(confirmBox){
                    window.location.reload();
                    const product = products.filter(product => product._id !== id)
                    setProducts(product)
                    toast('Successfully Deleted')
                }
                
            })

    }
    return (
        <>
            <div className='manage-product-container'>
                <div className='img-container'>
                    <img className='product-image' src={img} alt="" />
                </div>
                <div>
                    <p>Name: {name}</p>
                </div>
                <div>
                    <p>Price: {price}</p>
                </div>
                <div>
                    <p>Quantity: {quantity} kg</p>
                </div>
                <div onClick={() => deleteItem(_id)}>
                    <TiDelete className='delete-icon'></TiDelete>
                </div>
            </div>
        </>
    );
};

export default ManageProduct;