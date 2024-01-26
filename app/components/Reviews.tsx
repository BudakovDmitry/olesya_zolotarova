'use client'

import Slider from "react-slick";
import Image from "next/image";

import Review1 from '../../public/review_1.jpg'
import Review2 from '../../public/review_2.jpg'
import Review3 from '../../public/review_3.jpg'
import Review4 from '../../public/review_4.jpg'
import Review5 from '../../public/review_5.jpg'


const Reviews = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        variableHeight: true
    };

    return (
        <div className='slider'>
            <Slider {...settings}>
                <div className='slider__slide'>
                    <Image src={Review1} alt="Review 1" className='slick-image slider__slide_image' unoptimized/>
                </div>
                <div className='slider__slide'>
                    <Image src={Review2} alt="Review 2" className='slick-image slider__slide_image' unoptimized/>
                </div>
                <div className='slider__slide'>
                    <Image src={Review3} alt="Review 3" className='slick-image slider__slide_image' unoptimized/>
                </div>
                <div className='slider__slide'>
                    <Image src={Review4} alt="Review 4" className='slick-image slider__slide_image' unoptimized/>
                </div>
                <div className='slider__slide'>
                    <Image src={Review5} alt="Review 5" className='slick-image slider__slide_image' unoptimized/>
                </div>
            </Slider>
        </div>
    );
};

export default Reviews;