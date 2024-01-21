'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import Review1 from '../../public/review_1.jpg'
import Image from "next/image";

export default () => {
    return (
        <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            pagination={{clickable: true}}
        >
            <SwiperSlide>
                <Image src={Review1} alt="Review 1"
                       className='slide__image' unoptimized/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Review1} alt="Review 1"
                       className='slide__image' unoptimized/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Review1} alt="Review 1"
                       className='slide__image' unoptimized/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Review1} alt="Review 1"
                       className='slide__image' unoptimized/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Review1} alt="Review 1"
                       className='slide__image' unoptimized/>
            </SwiperSlide>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </Swiper>
    );
};