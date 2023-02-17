import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../redux/slices/productSlice';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Product from '../product/Product';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import './ProductList.css';

function ProdcutList() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);
    const status = useSelector(state => state.productReducer.status);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    if(status === 'loading'){
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
        return <Spin style={{position: 'absolute', top: '40%', left: '50%'}} indicator={antIcon} />
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