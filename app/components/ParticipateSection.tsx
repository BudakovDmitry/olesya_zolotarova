'use client'

import {motion} from "framer-motion"

const ParticipateSection = () => {
    return (
        <section className="participate_section">
            <div className="container">
                <motion.div
                    initial={{y: 300}}
                    whileInView={{y: 0}}
                    transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                    viewport={{once: true}}
                >
                    <div className="participate_section__text_container">
                        <p className="participate_section__text">На Интенсиве Вы получите Вкусное
                            Меню без лактозы, казеина и глютена.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 1}}
                    viewport={{once: true}}
                >
                    <a href="#" className="btn--big btn__primary participate_section__btn">Учавстовать</a>
                </motion.div>
            </div>
        </section>
    )
}

export default ParticipateSection;