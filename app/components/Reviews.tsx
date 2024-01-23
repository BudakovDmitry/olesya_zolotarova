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

    const sliderStyle = {
        width: "606px", // Задайте бажану ширину тут
        margin: "0 auto", // Це додає вирівнювання по центру, якщо потрібно
    };

    return (
        <div style={sliderStyle}>
            <Slider {...settings}>
                <div style={{ width: 606 }}>
                    <Image src={Review1} alt="Review 1" className='slick-image' unoptimized/>
                </div>
                <div style={{ width: 606 }}>
                    <Image src={Review1} alt="Review 1" className='slick-image' unoptimized/>
                </div>
                <div style={{ width: 606 }}>
                    <Image src={Review1} alt="Review 1" className='slick-image' unoptimized/>
                </div>
                <div style={{ width: 606 }}>
                    <Image src={Review1} alt="Review 1" className='slick-image' unoptimized/>
                </div>
                <div style={{ width: 606 }}>
                    <Image src={Review1} alt="Review 1" className='slick-image' unoptimized/>
                </div>
                <div style={{ width: 606 }}>
                    <Image src={Review1} alt="Review 1" className='slick-image' unoptimized/>
                </div>
            </Slider>
        </div>
    );
};