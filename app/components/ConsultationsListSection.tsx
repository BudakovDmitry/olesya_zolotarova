'use client'

import {motion} from "framer-motion"
import Image from "next/image";
import ListMarker from "@/public/list_marker.png";

const ConsultationsListSection = () => {
    return (
        <section id="consultations_list_section" className="consultations_list_section">
            <div className="consultations_list_section__container container">
                <motion.h2
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 1}}
                    viewport={{once: true}}
                    className="consultations_list_section__title"
                >
                    Какие проблемы решаем на консультации:
                </motion.h2>
                <ul className="consultations_list_section__list">
                    <motion.li
                        initial={{y: 300, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <span className='consultations_list_section__list_item_text'>Лишний вес</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Нарушения работы ЖКТ (кандидоз, дисбактериоз, СИБР, СИГР, застой желчи, язвы, эррозии, рефлюксы)</span>
                    </motion.li>
                    <motion.li
                        initial={{y: 300, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                                                <span
                                                    className='consultations_list_section__list_item_text'>Нарушение работы щитовидной железы</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Постковид</span>
                    </motion.li>
                    <motion.li
                        initial={{y: 300, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <span className='consultations_list_section__list_item_text'>Переедание, тяга к вредным продуктам</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Апатия, хроническая усталость, сонливость (СУН, митохондриальная дисфункция, хроническое воспаление)</span>
                    </motion.li>
                    <motion.li
                        initial={{y: 300, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <span className='consultations_list_section__list_item_text'>Проблемы с концентрацией внимания, плохая память</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span
                            className='consultations_list_section__list_item_text'>Высыпания, акне, выпадение волос</span>
                    </motion.li>
                    <motion.li
                        initial={{y: 300, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <span className='consultations_list_section__list_item_text'>Подготовка к зачатию, послеродовое восстановление</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span
                            className='consultations_list_section__list_item_text'>Низкое либидо</span>
                    </motion.li>
                    <motion.li
                        initial={{y: 300, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <span className='consultations_list_section__list_item_text'>Плаксивость, нервозность</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Восполнение дефицитов, улучшение качества жизни</span>
                    </motion.li>
                </ul>
                <ul className="consultations_list_section__list_mobile">
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Лишний вес</span>
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Нарушения работы ЖКТ (кандидоз, дисбактериоз, СИБР, СИГР, застой желчи, язвы, эррозии, рефлюксы)</span>
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span
                            className='consultations_list_section__list_item_text'>Нарушение работы щитовидной железы</span>
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Постковид</span>
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Переедание, тяга к вредным продуктам</span>
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Апатия, хроническая усталость, сонливость (СУН, митохондриальная дисфункция, хроническое воспаление)</span>
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Проблемы с концентрацией внимания, плохая память</span>
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span
                            className='consultations_list_section__list_item_text'>Высыпания, акне, выпадение волос</span>
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Подготовка к зачатию</span>
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span
                            className='consultations_list_section__list_item_text'>Послеродовое восстановление</span>
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Низкое либидо</span>
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ease: "easeOut", duration: 1}}
                        viewport={{once: true}}
                        className='consultations_list_section__list_item'
                    >
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Плаксивость, нервозность</span>
                    </motion.li>
                </ul>
            </div>
        </section>
    )
}

export default ConsultationsListSection;