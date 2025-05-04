import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../assets/banner/banner-1.png'
import slider2 from '../assets/banner/banner-2.png'
import slider3 from '../assets/banner/banner-3.png'
import slider4 from '../assets/banner/banner-4.png'
const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={slider1} />
                </div>
                <div>
                    <img src={slider2} />
                </div>
                <div>
                    <img src={slider3} />
                </div>
                <div>
                    <img src={slider4} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;