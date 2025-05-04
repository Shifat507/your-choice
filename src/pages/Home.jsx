import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            {/* Product Section */}
            <Products></Products>
        </section>
    );
};

export default Home;