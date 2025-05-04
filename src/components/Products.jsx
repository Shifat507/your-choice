import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Typewriter } from 'react-simple-typewriter';
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://admin.refabry.com/api/all/product/get')
            .then(data => setProducts(data.data.data.data))
    }, [])
    return (
        <div className='my-20 md:max-w-6xl mx-auto'>
            <h2 className='text-4xl font-bold text-red-900 mb-8 gap-3'>
                <Typewriter
                    words={['Available Products']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={80}
                    delaySpeed={1000}
                />
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;