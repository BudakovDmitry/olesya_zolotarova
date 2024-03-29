'use client'

import {motion} from "framer-motion"
import Image from "next/image";
import MainPhoto from "@/public/main_photo.jpg";
import MainPhotoMobile from "@/public/main_photo_mobile_new.webp";

const MainSection = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ease: "easeOut", duration: 2}}
            viewport={{once: true}}
        >
            <section className='main_section'>
                <Image src={MainPhoto} alt="Main photo" className='main_section__photo' priority={true} unoptimized/>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 3}}
                    viewport={{once: true}}
                >
                    <Image src={MainPhotoMobile} alt="Main photo" className='main_section__photo_mobile' priority={true}
                           unoptimized/>
                </motion.div>
                    <div className="main_section__content container">
                        <div className="main_section__content_container">
                            <h2 className='main_section__subtitle'>Интенсив</h2>
                            <h1 className='main_section__title'>ПЕРЕЗАГРУЗКА</h1>
                            <p className='main_section__description'>Перезагрузите свои привычки и питание со мной всего
                                за 10 дней</p>
                            <div className="main_section__button_container">
                                <a href="#tariffs" className='btn btn__primary main_section__button'>Участвовать</a>
                                <a href="#about_intensive"
                                   className='btn btn__secondary main_section__button main_section__button_more'>подробнее</a>
                            </div>
                        </div>
                    </div>
            </section>
        </motion.div>
)
}

export default MainSection;