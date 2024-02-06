'use client'

import {motion} from "framer-motion"

const ConsultationsAppointment = () => {
    return (
        <section className="consultations_appointment">
            <div className="consultations_appointment__container container">
                <motion.p
                    initial={{y: 300, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{type: "spring", bounce: 0.4}}
                    viewport={{once: true}}
                    className='consultations_appointment__text'
                >
                    Назначение анализов
                        производится в течении суток
                        после заполнения вами анкеты
                </motion.p>
            </div>
        </section>
)
}

export default ConsultationsAppointment;