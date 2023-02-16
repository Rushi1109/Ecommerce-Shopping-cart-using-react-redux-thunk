import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
    },
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const {loadProducts} = productSlice.actions;
export default productSlice.reducer;