'use client'

import {motion, Variants} from "framer-motion"

import Image from "next/image";
import AboutMePhoto from "@/public/about_me_photo.jpg";
import ListMarker from "@/public/list_marker.png";

const AboutMeSection = () => {

    const imageVariants: Variants = {
        offscreen: {
            y: 300,
            x: -300,
            rotate: -20
        },
        onscreen: {
            y: 0,
            x: 0,
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.3
            }
        }
    };

    return (
        <section id='about_me' className="about_me_section">
            <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.8}}
            >
                <div className="container">
                    <motion.h2
                        initial={{x: 700, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className="title_section title_section-dark about_me_section__title_section"
                    >
                        Обо мне
                    </motion.h2>
                    <motion.h2
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1.5}}
                        viewport={{once: true}}
                        className="title_section title_section-dark about_me_section__title_section_mobile"
                    >
                        Обо мне
                    </motion.h2>
                    <div className="about_me_section__content">
                        <div className="about_me_section__image_block">
                            <div className="about_me_section__image_bg"></div>
                            <motion.div
                                variants={imageVariants}
                                className='about_me_section__image_animate_container'
                            >
                                <Image src={AboutMePhoto} alt="About me photo" className='about_me_section__image'
                                       unoptimized/>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{ease: "easeOut", duration: 1.5}}
                                viewport={{once: true}}
                                className='about_me_section__image_animate_container_mobile'
                            >
                                <Image src={AboutMePhoto} alt="About me photo" className='about_me_section__image'
                                       unoptimized/>
                            </motion.div>
                        </div>
                        <div className="about_me_section__text_block">
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{ease: "easeOut", duration: 1}}
                                viewport={{once: true}}
                            >
                                <p className="about_me_section__title">Здравствуйте, меня зовут Олеся Золотарева</p>
                                <p className="about_me_section__subtitle">Я практикующий нутрициолог, натуропат, специалист по питанию и модификации образа жизни.</p>
                            </motion.div>
                            <ul className="about_me_section__list">
                                <motion.li
                                    initial={{x: 700, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    transition={{ease: "easeOut", duration: 1}}
                                    viewport={{once: true}}
                                    className="about_me_section__list_item"
                                >
                                    <Image src={ListMarker} alt="List marker"
                                           className='about_me_section__list_item_icon' unoptimized/>
                                    <span
                                        className='about_me_section__list_item_text'>Даю инструменты как стать здоровой</span>
                                </motion.li>
                                <motion.li
                                    initial={{x: 700, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    transition={{ease: "easeOut", duration: 1}}
                                    viewport={{once: true}}
                                    className="about_me_section__list_item"
                                >
                                    <Image src={ListMarker} alt="List marker"
                                           className='about_me_section__list_item_icon' unoptimized/>
                                    <span className='about_me_section__list_item_text'>Меняю пищевые привычки</span>
                                </motion.li>
                                <motion.li
                                    initial={{x: 700, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    transition={{ease: "easeOut", duration: 1}}
                                    viewport={{once: true}}
                                    className="about_me_section__list_item"
                                >
                                    <Image src={ListMarker} alt="List marker"
                                           className='about_me_section__list_item_icon' unoptimized/>
                                    <span className='about_me_section__list_item_text'>Научу как стать стройной и удержать вес</span>
                                </motion.li>
                                <motion.li
                                    initial={{x: 700, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    transition={{ease: "easeOut", duration: 1}}
                                    viewport={{once: true}}
                                    className="about_me_section__list_item"
                                >
                                    <Image src={ListMarker} alt="List marker"
                                           className='about_me_section__list_item_icon' unoptimized/>
                                    <span className='about_me_section__list_item_text'>Устраняю дефициты и хронические состояния</span>
                                </motion.li>
                                <motion.li
                                    initial={{x: 700, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    transition={{ease: "easeOut", duration: 1}}
                                    viewport={{once: true}}
                                    className="about_me_section__list_item"
                                >
                                    <Image src={ListMarker} alt="List marker"
                                           className='about_me_section__list_item_icon' unoptimized/>
                                    <span className='about_me_section__list_item_text'>Занимаюсь подбором персонализированного плана питания.</span>
                                </motion.li>
                            </ul>
                            <ul className="about_me_section__list_mobile">
                                <motion.li
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{ease: "easeOut", duration: 1}}
                                    viewport={{once: true}}
                                    className="about_me_section__list_mobile_item"
                                >
                                    <Image src={ListMarker} alt="List marker"
                                           className='about_me_section__list_mobile_item_icon' unoptimized/>
                                    <span
                                        className='about_me_section__list_mobile_item_text'>Даю инструменты как стать здоровой</span>
                                </motion.li>
                                <motion.li
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{ease: "easeOut", duration: 1}}
                                    viewport={{once: true}}
                                    className="about_me_section__list_mobile_item"
                                >
                                    <Image src={ListMarker} alt="List marker"
                                           className='about_me_section__list_mobile_item_icon' unoptimized/>
                                    <span className='about_me_section__list_mobile_item_text'>Меняю пищевые привычки</span>
                                </motion.li>
                                <motion.li
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{ease: "easeOut", duration: 1}}
                                    viewport={{once: true}}
                                    className="about_me_section__list_mobile_item"
                                >
                                    <Image src={ListMarker} alt="List marker"
                                           className='about_me_section__list_mobile_item_icon' unoptimized/>
                                    <span className='about_me_section__list_mobile_item_text'>Научу как стать стройной и удержать вес</span>
                                </motion.li>
                                <motion.li
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{ease: "easeOut", duration: 1}}
                                    viewport={{once: true}}
                                    className="about_me_section__list_mobile_item"
                                >
                                    <Image src={ListMarker} alt="List marker"
                                           className='about_me_section__list_mobile_item_icon' unoptimized/>
                                    <span className='about_me_section__list_mobile_item_text'>Устраняю дефициты и хронические состояния</span>
                                </motion.li>
                                <motion.li
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{ease: "easeOut", duration: 1}}
                                    viewport={{once: true}}
                                    className="about_me_section__list_mobile_item"
                                >
                                    <Image src={ListMarker} alt="List marker"
                                           className='about_me_section__list_mobile_item_icon' unoptimized/>
                                    <span className='about_me_section__list_mobile_item_text'>Занимаюсь подбором персонализированного плана питания.</span>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default AboutMeSection;