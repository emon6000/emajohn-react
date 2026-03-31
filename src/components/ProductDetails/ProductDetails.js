import React from 'react';
import { useParams } from 'react-router-dom';
import fakedata from '../../fakeData/products.js'
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productkey} = useParams();
    const product = fakedata.find(pd => pd.key === productkey);
    console.log(product);
    return (
        <div>
            <h1>
                Your Product Details
            </h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;