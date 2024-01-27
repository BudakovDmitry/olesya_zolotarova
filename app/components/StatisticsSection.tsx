'use client'

import {motion} from "framer-motion"

const StatisticsSection = () => {
    return (
        <motion.div
            initial={{y: 300}}
            animate={{y: 0}}
            transition={{type: "spring", bounce: 0.4, duration: 1.5}}
            viewport={{once: true}}
        >
            <section className='statistics_section'>
                <div className="container">
                    <div className="statistics_section__container">
                        <div className="statistics_section__item">
                            <div className="statistics_section__item_count">450+</div>
                            <p className="statistics_section__item_text">довольных клиентов</p>
                        </div>
                        <div className="statistics_section__item">
                            <div className="statistics_section__item_count">5</div>
                            <p className="statistics_section__item_text">лет опыта </p>
                        </div>
                        <div className="statistics_section__item">
                            <div className="statistics_section__item_count">2000+</div>
                            <p className="statistics_section__item_text">часов консультаций </p>
                        </div>
                    </div>
                </div>

            </section>
        </motion.div>
    )
}

export default StatisticsSection;