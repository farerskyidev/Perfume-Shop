import React from "react";
import classes from './Banner.module.scss'; 

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img from '../../img/banner.png';

class Banner extends React.Component {
    render() {
        return (
            <section className={classes.banner}>
                <div className="container"> 
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1} 
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')} 
                        >     
                        <SwiperSlide><img src={img} alt="" /><a href="#">Shop Now</a></SwiperSlide> 
                        <SwiperSlide><img src={img} alt="" /><a href="#">Shop Now</a></SwiperSlide> 
                        <SwiperSlide><img src={img} alt="" /><a href="#">Shop Now</a></SwiperSlide> 
                        <SwiperSlide><img src={img} alt="" /><a href="#">Shop Now</a></SwiperSlide> 
                    </Swiper>
                </div>
            </section> 
        );
    }
}

export default Banner;