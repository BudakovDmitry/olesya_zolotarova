'use client'

import {animate, motion, useMotionValue, useTransform} from "framer-motion"
import {useEffect, useRef} from "react";
import { useInView } from "framer-motion"


const StatisticsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const count1 = useMotionValue(0)
    const rounded1 = useTransform(count1, latest => Math.round(latest))
    const count2 = useMotionValue(0)
    const rounded2 = useTransform(count2, latest => Math.round(latest))
    const count3 = useMotionValue(0)
    const rounded3 = useTransform(count3, latest => Math.round(latest))


    useEffect(() => {
        if(isInView) {
            const controls1 = animate(count1, 450, { duration: 3 })
            const controls2 = animate(count2, 5, { duration: 3 })
            const controls3 = animate(count3, 2000, { duration: 3 })

            return () => {
                controls1.stop
                controls2.stop
                controls3.stop
            }
        }
    }, [isInView])

    return (
        <section className='statistics_section'>
            <motion.div
                initial={{y: 300}}
                animate={{y: 0}}
                transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                viewport={{once: true}}
            >
                <div className="container">
                    <div className="statistics_section__container" ref={ref}>
                        <div className="statistics_section__item">
                            <div className="statistics_section__item_count"><motion.span>{rounded1}</motion.span>+</div>
                            <p className="statistics_section__item_text">довольных клиентов</p>
                        </div>
                        <div className="statistics_section__item">
                            <div className="statistics_section__item_count">
                                <motion.span>{rounded2}</motion.span>
                            </div>
                            <p className="statistics_section__item_text">лет опыта</p>
                        </div>
                        <div className="statistics_section__item">
                            <div className="statistics_section__item_count"><motion.span>{rounded3}</motion.span>+</div>
                            <p className="statistics_section__item_text">часов консультаций</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default StatisticsSection;