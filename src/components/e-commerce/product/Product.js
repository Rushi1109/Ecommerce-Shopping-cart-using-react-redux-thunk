import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/slices/cartSlice';
import './Product.css';

function Product({ product }) {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart);
    const curItem = cart.find(item => item.id === product.id);
    const curQuantity = curItem? curItem.quantity:0;

    return (
        <div className='product'>
            <img className='productImg' src={product.images[0]} alt={product.title} />
            <div className="productInfo">
                <h2 className='productTitle'>{product.title}</h2>
                <p className='productPrice'>${product.price}</p>
            </div>
            <div className="cartInfo">
                <button className='bttn' onClick={() => dispatch(removeFromCart(product.id))}>-</button>
                <h4>{curQuantity}</h4>
                <button className='bttn' onClick={() => dispatch(addToCart(product))}>+</button>
            </div>
        </div>
    );
}

export default Product;
