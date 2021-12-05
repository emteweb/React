import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = (props) => {
    console.log(props);
    return (
        <>
        <h1>Product Page</h1>
        <Product />
        <Link to="/products">Return to product list</Link>
        </>
    );
}

export default ProductPage;