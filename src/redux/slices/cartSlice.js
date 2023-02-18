import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            const cartItem = state.cart.find(item => item.id === action.payload.id);
            if (cartItem) {
                cartItem.quantity += 1;
            }
            else {
                const newProduct = Object.assign({ quantity: 1 }, action.payload);
                state.cart.push(newProduct);
            }
        },
        removeFromCart: (state, action) => {
            const cartItem = state.cart.find(item => item.id === action.payload);
            if (cartItem) {
                cartItem.quantity -= 1;
                if (cartItem.quantity <= 0) {
                    state.cart = state.cart.filter(item => item.id !== action.payload);
                }
            }
        },
        removeWholeProduct: (state, action) => {
            const cartItem = state.cart.find(item => item.id === action.payload);
            if (cartItem) {
                state.cart = state.cart.filter(item => item.id !== action.payload);
            }
        },
        removeAll: (state, action) => {
            state.cart.forEach(item => {
                item.quantity = 0;
                if (item.quantity < 0) {
                    state.cart = state.cart.filter(item => item.id !== action.payload);
                }
            })
        }
    }
});

export const { addToCart, removeFromCart, removeWholeProduct, removeAll } = cartSlice.actions;
export default cartSlice.reducer;

// Cart Structure

// {
//     quantity:12,
//     id: 1234,
// }