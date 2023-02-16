import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../../redux/slices/productSlice';
import Product from '../product/Product';
import './ProductList.css';

function ProdcutList() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await response.json();
        // console.log(data);
        dispatch(loadProducts(data));
    }

    return (
        <div className='productList'>
            {products.map((item) => {
                return <Product key={item.id} product={item} />
            })}
        </div>
    )
}

export default ProdcutList;
