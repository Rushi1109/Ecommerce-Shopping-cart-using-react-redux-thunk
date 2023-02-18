import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart,removeFromCart,removeWholeProduct } from '../../../redux/slices/cartSlice';

function CartItem({ product }) {

    const dispatch = useDispatch();

    return (
        <div>
            <div className="Cart-Items">
                <div className="image-box">
                    <img src={product.images[0]} style={{ height: "120px" }} alt={product.title} />
                </div>
                <div className="about">
                    <h1 className="title" style={{ marginBottom: "2rem" }}>{product.title}</h1>
                    <h3 className="subtitle">{product.category.name}</h3>
                    {/* <img src="images/veg.png" style={{ height: "30px" }} /> */}
                </div>
                <div className="counter">
                    <div className="btn" onClick={() => dispatch(removeFromCart(product.id))}>-</div>
                    <div className="count">{product.quantity}</div>
                    <div className="btn" onClick={() => dispatch(addToCart(product))}>+</div>
                </div>
                <div className="prices">”
                    <div className="amount">{product.price * product.quantity}</div>
                    <div className="remove" onClick={() => dispatch(removeWholeProduct(product.id))}><u>Remove</u></div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
