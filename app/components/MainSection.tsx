'use client'

import {motion} from "framer-motion"
import Image from "next/image";
import MainPhoto from "@/public/main_photo.jpg";

const MainSection = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ease: "easeOut", duration: 1}}
            viewport={{once: true}}
        >
            <section className='main_section'>
                <Image src={MainPhoto} alt="Main photo" className='main_section__photo' priority={true} unoptimized/>
                <div className="main_section__content container">
                    <div className="main_section__content_container">
                        <h2 className='main_section__subtitle'>Интенсив</h2>
                        <h1 className='main_section__title'>ПЕРЕЗАГРУЗКА</h1>
                        <p className='main_section__description'>Перезагрузите свои привычки и питание со мной всего
                            за 10 дней</p>
                        <div className="main_section__button_container">
                            <a href="#" className='btn btn__primary main_section__button'>Учавстовать</a>
                            <a href="#"
                               className='btn btn__secondary main_section__button main_section__button_more'>подробнее</a>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default MainSection;