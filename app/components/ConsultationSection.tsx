'use client'

import { motion } from "framer-motion"
import Image from "next/image";
import ConsultationPhoto from "@/public/consultation_photo.jpg";

const ConsultationSection = () => {
    return (
        <section className="consultation_section">
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ease: "easeOut", duration: 1}}
                viewport={{once: true}}
            >
                <div className="container consultation_section__container">
                    <div className="consultation_section__text">
                        <p className="consultation_section__description">Для тех, кто желает персональное сопровождение
                            в
                            решении вопросов со здоровьем - записывайтесь ко мне на </p>
                        <h4 className="consultation_section__title">консультацию</h4>
                        <a href="#" className="btn btn__primary consultation_section__link">подробнее</a>
                    </div>
                    <Image src={ConsultationPhoto} alt="Consultation photo" className='consultation_section__photo'
                           unoptimized/>
                </div>
            </motion.div>
        </section>
)
}

export default ConsultationSection;