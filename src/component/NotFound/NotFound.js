import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="messg card-contain">
            <Banner></Banner>
                <div className=" not-found">
                    <h1 className="text-9xl text-center">404</h1>
                    <h1 className="text-7xl">Page Not Found</h1>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;