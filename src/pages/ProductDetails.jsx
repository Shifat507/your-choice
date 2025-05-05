import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const loadData = useLoaderData();
    const productsData = loadData.data.data;
    console.log(id, productsData);
    const productDetails = productsData.find(product => product.id == id)
    const { image, name, short_desc, price, stock, category } = productDetails;
    // console.log(productDetails);
    return (
        <div className="hero bg-base-200 md:w-3xl lg:w-5xl mx-auto lg:mx-auto my-20">
            <div className="hero-content flex-col md:flex-row gap-6 lg:gap-10">
                <img
                    src={`https://admin.refabry.com/storage/product/${image}`}
                    className="w-72 md:w-80 lg:max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-xl md:text-2xl lg:text-5xl font-bold">{name}</h1>
                    <div className="badge badge-soft badge-secondary my-1 md:my-5">{category.name}</div>
                    <p className="py-6">
                        {short_desc}
                    </p>
                    <div className='flex justify-between items-center mb-8'>
                        <span className="text-3xl font-semibold text-black">
                            ${price.toFixed(2)}
                        </span>
                        <span className="badge badge-outline">{stock} in stock</span>
                    </div>

                    <div className='text-center lg:text-end'>
                        <button className="btn btn-wide bg-red-600 text-white rounded-lg">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;