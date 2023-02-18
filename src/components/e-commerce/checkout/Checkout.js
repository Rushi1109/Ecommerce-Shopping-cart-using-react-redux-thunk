import React from 'react'
import CartItem from './CartItem'
import './Checkout.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeAll } from '../../../redux/slices/cartSlice';

function Checkout() {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cartReducer.cart);
    let itemCount = 0;
    cart.forEach(item => {
        itemCount += item.quantity;
    });

    let totalAmount = 0;
    cart.forEach(item =>{
        totalAmount += item.quantity*item.price;
    })

    return (
        <>
            <div className='checkoutPage'>
                <div className="Cart-Container">
                    <div className="Header">
                        <h3 className="Heading">Shopping Cart</h3>
                        <h5 className="Action" onClick={() => dispatch(removeAll())}>Remove all</h5>
                    </div>
                    <div className='cartList'>
                        {cart.map((item) => {
                            return <CartItem key={item.id} product={item} />
                        })}
                    </div>
                    <div className="checkout">
                        <div className="total">
                            <div>
                                <div className="Subtotal">Sub-Total</div>
                                <div className="items">{itemCount} items</div>
                            </div>
                            <div className="total-amount">${totalAmount}</div>
                        </div>
                        <button className="button">Checkout</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Checkout
