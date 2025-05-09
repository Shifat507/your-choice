import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    // md:max-w-6xl mx-auto
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-screen '>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;