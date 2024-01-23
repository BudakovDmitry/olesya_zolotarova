'use client'

import Slider from "react-slick";
import Review1 from '../../public/review_1.jpg'
import Image from "next/image";

export default () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='slider'>
            <Slider {...settings}>
                <div className='slider__slide'>
                    <Image src={Review1} alt="Review 1" className='slick-image slider__slide_image' unoptimized/>
                </div>
                <div className='slider__slide'>
                    <Image src={Review1} alt="Review 1" className='slick-image slider__slide_image' unoptimized/>
                </div>
                <div className='slider__slide'>
                    <Image src={Review1} alt="Review 1" className='slick-image slider__slide_image' unoptimized/>
                </div>
                <div className='slider__slide'>
                    <Image src={Review1} alt="Review 1" className='slick-image slider__slide_image' unoptimized/>
                </div>
                <div className='slider__slide'>
                    <Image src={Review1} alt="Review 1" className='slick-image slider__slide_image' unoptimized/>
                </div>
                <div className='slider__slide'>
                    <Image src={Review1} alt="Review 1" className='slick-image slider__slide_image' unoptimized/>
                </div>
            </Slider>
        </div>
    );
};