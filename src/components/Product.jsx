import React, { useState } from 'react';

const Product = ({ product }) => {
    const {
        image,
        name,
        price,
        stock,
        category
    } = product;

    const [showDetails, setShowDetails] = useState(false);

    // Detect screen size to disable hover effect on desktop
    const handleToggleDetails = () => {
        if (window.innerWidth < 1024) { 
            setShowDetails(!showDetails);
        }
    };

    return (
        <div
            onClick={handleToggleDetails}
            className='group shadow-2xl rounded-lg relative overflow-hidden px-6 md:px-0 w-64 md:w-52 lg:w-64 mx-auto cursor-pointer'
        >
            <div>
                <img
                    className='w-full h-64 object-cover rounded-lg'
                    src={`https://admin.refabry.com/storage/product/${image}`}
                    alt={name}
                />
                <div className="absolute bottom-14 md:bottom-20 lg:bottom-14 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {category.name}
                </div>
            </div>

            <div className='px-2 py-2.5'>
                <h2 className='text-lg font-bold text-center'>{name}</h2>
            </div>

            <div className={`
                px-4 py-5 absolute bottom-0 w-full bg-white bg-opacity-95 z-50 rounded-lg shadow-2xl
                transition-all duration-700 ease-in-out
                ${showDetails ? 'opacity-100 translate-y-0 -left-0.5 md:left-0' : 'opacity-0 translate-y-5 -left-0.5 md:left-0'}
                group-hover:opacity-100 group-hover:translate-y-0
            `}>
                <div className='flex justify-between mb-2'>
                    <span className="text-lg font-semibold text-black">
                        ${price.toFixed(2)}
                    </span>
                    <span className="badge badge-outline">{stock} in stock</span>
                </div>
                <div className='text-center mt-4'>
                    <button className='btn bg-red-900 hover:bg-red-800 text-white text-lg font-semibold rounded-xl px-12 md:px-8 lg:px-12 py-2'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
