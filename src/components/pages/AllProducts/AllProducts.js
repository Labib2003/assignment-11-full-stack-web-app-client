import React from 'react';
import { Helmet } from 'react-helmet-async';
import useProducts from '../../../hooks/useProducts';
import Product from '../../sharedComponents/Product';

const AllProducts = () => {
    const [products] = useProducts();
    return (
        <div className='container mx-auto p-3'>
            <Helmet>
                <title>AllProducts - EasyInventory</title>
            </Helmet>
            <h3 className='text-3xl text-gray-900 font-semibold my-5'>All products</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;