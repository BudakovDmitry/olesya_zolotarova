'use client'

import {motion} from "framer-motion"
import Image from "next/image";
import AboutIntensiveBg from "@/public/about_intensive_bg.png";
import AboutIntensiveBgMobile from "@/public/about_intensive_bg_mobile.png";
import AboutIntensive from "@/public/about_intensive.png";
import AboutIntensiveMobile from "@/public/about_intensive_mobile.png";

const AboutIntensiveSection = () => {
    return (
        <section id='about_intensive' className="about_intensive_section">
            <div className="container">
                <Image src={AboutIntensiveBg} alt="About intensive background"
                       className='about_intensive_section__bg'
                       unoptimized/>
                <Image src={AboutIntensiveBgMobile} alt="About intensive background"
                       className='about_intensive_section__bg_mobile'
                       unoptimized/>
                <motion.h2
                    initial={{x: 700, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1}}
                    viewport={{once: true}}
                    className="title_section title_section-light about_intensive_section__title_section"
                >
                    Про
                    интенсив
                </motion.h2>
                <motion.h2
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 1.5}}
                    viewport={{once: true}}
                    className="title_section title_section-light about_intensive_section__title_section_mobile"
                >
                    Про
                    интенсив
                </motion.h2>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 1.5}}
                    viewport={{once: true}}
                >
                    <p className="about_intensive_section__description">
                        На Интенсиве <span
                        className='about_intensive_section__description_upper'>Перезагрузка</span> за 10 дней вы
                        получите всю необходимую информацию:
                    </p>
                </motion.div>
                <motion.div
                    initial={{rotate: 180, opacity: 0}}
                    whileInView={{rotate: 0, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1}}
                    viewport={{once: true}}
                >
                    <Image src={AboutIntensive} alt="About intensive" className='about_intensive_section__image'
                           unoptimized/>
                </motion.div>
                <motion.div
                    initial={{rotate: 180, opacity: 0}}
                    whileInView={{rotate: 0, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1}}
                    viewport={{once: true}}
                >
                    <Image src={AboutIntensiveMobile} alt="About intensive"
                           className='about_intensive_section__image_mobile' unoptimized/>
                </motion.div>
                <motion.p
                    initial={{scale: 1.3, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1, delay: 0.5}}
                    viewport={{once: true}}
                    className="about_intensive_section__description_mobile"
                >
                    Как избавиться от привычек, убивающих ваше здоровье
                </motion.p>
                <motion.p
                    initial={{scale: 1.3, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1, delay: 1}}
                    viewport={{once: true}}
                    className="about_intensive_section__description_mobile"
                >
                    Как составить рацион питания, который повысит уровень энергии и качество жизни
                </motion.p>
                <motion.p
                    initial={{scale: 1.3, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1, delay: 1.5}}
                    viewport={{once: true}}
                    className="about_intensive_section__description_mobile last"
                >
                    Как снизить вес
                </motion.p>
                <motion.div
                    initial={{y: 300}}
                    whileInView={{y: 0}}
                    transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                    viewport={{once: true}}
                >
                    <div className="about_intensive_section__info_container">
                        <p className="about_intensive_section__info_text">После прохождения Интенсива у вас отпадет
                            необходимость гуглить и искать какую-либо информацию по этим темам, я дам вам в легкой и
                            доступной форме все, что нужно для того, чтобы перезагрузить привычки и питание.</p>
                    </div>
                </motion.div>
                <motion.h2
                    initial={{x: 700, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1}}
                    viewport={{once: true}}
                    className="title_section title_section-light about_intensive_section__title_section_second"
                >
                    Основные
                    темы интенсива
                </motion.h2>
                <motion.h2
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 1.5}}
                    viewport={{once: true}}
                    className="title_section title_section-light about_intensive_section__title_section_second_mobile"
                >
                    Основные
                    темы интенсива
                </motion.h2>
                <ul className="about_intensive_section__list">
                    <motion.div
                        initial={{y: 300}}
                        whileInView={{y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                    >
                        <li className="about_intensive_section__list_item">
                            <div className="about_intensive_section__list_item_marker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="287" height="6" viewBox="0 0 287 6"
                                     fill="none">
                                    <path
                                        d="M281.333 3C281.333 4.47276 282.527 5.66667 284 5.66667C285.473 5.66667 286.667 4.47276 286.667 3C286.667 1.52724 285.473 0.333333 284 0.333333C282.527 0.333333 281.333 1.52724 281.333 3ZM0 3.5H284V2.5H0V3.5Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </div>
                            <div className="about_intensive_section__list_item_text"><h4
                                className="about_intensive_section__list_item_title">Здоровый рацион </h4>
                                <p className="about_intensive_section__list_item_description">Важные принципы. Как
                                    формировать рацион. Конструктор холодильника. Как выбирать продукты в
                                    магазине. </p></div>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{y: 300}}
                        whileInView={{y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                    >
                        <li className="about_intensive_section__list_item">
                            <div className="about_intensive_section__list_item_marker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="287" height="6" viewBox="0 0 287 6"
                                     fill="none">
                                    <path
                                        d="M281.333 3C281.333 4.47276 282.527 5.66667 284 5.66667C285.473 5.66667 286.667 4.47276 286.667 3C286.667 1.52724 285.473 0.333333 284 0.333333C282.527 0.333333 281.333 1.52724 281.333 3ZM0 3.5H284V2.5H0V3.5Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </div>
                            <div className="about_intensive_section__list_item_text"><h4
                                className="about_intensive_section__list_item_title">Инсулин, лептин, глюкоза,
                                гормоны</h4>
                                <p className="about_intensive_section__list_item_description">Как влияют на аппетит
                                    и вес?</p></div>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{y: 300}}
                        whileInView={{y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                    >
                        <li className="about_intensive_section__list_item">
                            <div className="about_intensive_section__list_item_marker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="287" height="6" viewBox="0 0 287 6"
                                     fill="none">
                                    <path
                                        d="M281.333 3C281.333 4.47276 282.527 5.66667 284 5.66667C285.473 5.66667 286.667 4.47276 286.667 3C286.667 1.52724 285.473 0.333333 284 0.333333C282.527 0.333333 281.333 1.52724 281.333 3ZM0 3.5H284V2.5H0V3.5Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </div>
                            <div className="about_intensive_section__list_item_text"><h4
                                className="about_intensive_section__list_item_title">Что такое детоксикация</h4>
                                <p className="about_intensive_section__list_item_description">Как помочь печени
                                    справляться с выведением токсинов?</p></div>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{y: 300}}
                        whileInView={{y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                    >
                        <li className="about_intensive_section__list_item">
                            <div className="about_intensive_section__list_item_marker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="287" height="6"
                                     viewBox="0 0 287 6"
                                     fill="none">
                                    <path
                                        d="M281.333 3C281.333 4.47276 282.527 5.66667 284 5.66667C285.473 5.66667 286.667 4.47276 286.667 3C286.667 1.52724 285.473 0.333333 284 0.333333C282.527 0.333333 281.333 1.52724 281.333 3ZM0 3.5H284V2.5H0V3.5Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </div>
                            <div className="about_intensive_section__list_item_text"><h4
                                className="about_intensive_section__list_item_title">Разгрузка/ пищевые
                                паузы</h4>
                                <p className="about_intensive_section__list_item_description">Зачем? Кому
                                    подходит?
                                    Противопоказания.</p></div>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{y: 300}}
                        whileInView={{y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                    >
                        <li className="about_intensive_section__list_item">
                            <div className="about_intensive_section__list_item_marker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="287" height="6"
                                     viewBox="0 0 287 6"
                                     fill="none">
                                    <path
                                        d="M281.333 3C281.333 4.47276 282.527 5.66667 284 5.66667C285.473 5.66667 286.667 4.47276 286.667 3C286.667 1.52724 285.473 0.333333 284 0.333333C282.527 0.333333 281.333 1.52724 281.333 3ZM0 3.5H284V2.5H0V3.5Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </div>
                            <div className="about_intensive_section__list_item_text"><h4
                                className="about_intensive_section__list_item_title">Пищевые привычки</h4>
                                <p className="about_intensive_section__list_item_description">Как
                                    формируются?
                                    Как
                                    изменить?</p></div>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{y: 300}}
                        whileInView={{y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                    >
                        <li className="about_intensive_section__list_item">
                            <div className="about_intensive_section__list_item_marker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="287" height="6"
                                     viewBox="0 0 287 6"
                                     fill="none">
                                    <path
                                        d="M281.333 3C281.333 4.47276 282.527 5.66667 284 5.66667C285.473 5.66667 286.667 4.47276 286.667 3C286.667 1.52724 285.473 0.333333 284 0.333333C282.527 0.333333 281.333 1.52724 281.333 3ZM0 3.5H284V2.5H0V3.5Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </div>
                            <div className="about_intensive_section__list_item_text"><h4
                                className="about_intensive_section__list_item_title">Психология
                                питания</h4>
                            </div>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{y: 300}}
                        whileInView={{y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                    >
                        <li className="about_intensive_section__list_item">
                            <div className="about_intensive_section__list_item_marker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="287" height="6"
                                     viewBox="0 0 287 6"
                                     fill="none">
                                    <path
                                        d="M281.333 3C281.333 4.47276 282.527 5.66667 284 5.66667C285.473 5.66667 286.667 4.47276 286.667 3C286.667 1.52724 285.473 0.333333 284 0.333333C282.527 0.333333 281.333 1.52724 281.333 3ZM0 3.5H284V2.5H0V3.5Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </div>
                            <div className="about_intensive_section__list_item_text"><h4
                                className="about_intensive_section__list_item_title">Симпатическая /
                                парасимпатическая нервная система</h4>
                                <p className="about_intensive_section__list_item_description">Что
                                    это?
                                    Как
                                    влияет на
                                    пищеварение?</p></div>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{y: 300}}
                        whileInView={{y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                    >
                        <li className="about_intensive_section__list_item">
                            <div className="about_intensive_section__list_item_marker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="287" height="6"
                                     viewBox="0 0 287 6"
                                     fill="none">
                                    <path
                                        d="M281.333 3C281.333 4.47276 282.527 5.66667 284 5.66667C285.473 5.66667 286.667 4.47276 286.667 3C286.667 1.52724 285.473 0.333333 284 0.333333C282.527 0.333333 281.333 1.52724 281.333 3ZM0 3.5H284V2.5H0V3.5Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </div>
                            <div className="about_intensive_section__list_item_text"><h4
                                className="about_intensive_section__list_item_title">Пищеварение</h4>
                                <p className="about_intensive_section__list_item_description">Как
                                    работает
                                    наша
                                    пищеварительная система. Клапанная система.</p></div>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{y: 300}}
                        whileInView={{y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                    >
                        <li className="about_intensive_section__list_item">
                            <div className="about_intensive_section__list_item_marker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="287"
                                     height="6"
                                     viewBox="0 0 287 6"
                                     fill="none">
                                    <path
                                        d="M281.333 3C281.333 4.47276 282.527 5.66667 284 5.66667C285.473 5.66667 286.667 4.47276 286.667 3C286.667 1.52724 285.473 0.333333 284 0.333333C282.527 0.333333 281.333 1.52724 281.333 3ZM0 3.5H284V2.5H0V3.5Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </div>
                            <div className="about_intensive_section__list_item_text"><h4
                                className="about_intensive_section__list_item_title">Лактоза,
                                казеин,
                                глютен,
                                сахар</h4>
                                <p className="about_intensive_section__list_item_description">Чем
                                    вредны?
                                    Кому
                                    можно? Кому нельзя?</p></div>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{y: 300}}
                        whileInView={{y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                    >
                        <li className="about_intensive_section__list_item">
                            <div className="about_intensive_section__list_item_marker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="287"
                                     height="6"
                                     viewBox="0 0 287 6"
                                     fill="none">
                                    <path
                                        d="M281.333 3C281.333 4.47276 282.527 5.66667 284 5.66667C285.473 5.66667 286.667 4.47276 286.667 3C286.667 1.52724 285.473 0.333333 284 0.333333C282.527 0.333333 281.333 1.52724 281.333 3ZM0 3.5H284V2.5H0V3.5Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </div>
                            <div className="about_intensive_section__list_item_text"><h4
                                className="about_intensive_section__list_item_title">Дыхательные
                                упражнения
                                для
                                улучшения пищеварения.</h4>
                            </div>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{y: 300}}
                        whileInView={{y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                    >
                        <li className="about_intensive_section__list_item">
                            <div
                                className="about_intensive_section__list_item_marker">
                                <svg xmlns="http://www.w3.org/2000/svg" width="287"
                                     height="6"
                                     viewBox="0 0 287 6"
                                     fill="none">
                                    <path
                                        d="M281.333 3C281.333 4.47276 282.527 5.66667 284 5.66667C285.473 5.66667 286.667 4.47276 286.667 3C286.667 1.52724 285.473 0.333333 284 0.333333C282.527 0.333333 281.333 1.52724 281.333 3ZM0 3.5H284V2.5H0V3.5Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </div>
                            <div
                                className="about_intensive_section__list_item_text">
                                <h4
                                    className="about_intensive_section__list_item_title">Отеки</h4>
                                <p className="about_intensive_section__list_item_description">Причины
                                    отеков.
                                    Как с
                                    ними бороться?</p></div>
                        </li>
                    </motion.div>
                </ul>
            </div>
        </section>
    )
}

export default AboutIntensiveSection;