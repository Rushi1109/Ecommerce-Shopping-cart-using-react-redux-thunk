import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import './Navbar.css'

function Navbar() {

    const cart = useSelector(state => state.cartReducer.cart);
    let itemCount = 0;
    cart.forEach(item => {
        itemCount += item.quantity;
    });

    return (
        <nav>
            <h2 className="banner">My Shop</h2>
            <div className="right-layout">
                <div className="cart-layout">
                    <AiOutlineShoppingCart />
                    <h3>{itemCount}</h3>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
