'use client'

import {ReactTyped} from "react-typed";

const ConsultationsMainSection = () => {
    return (
        <section className='consultations_main_section'>
            <div className="consultations_main_section__content container">
                <div className="consultations_main_section__title_container">
                    <ReactTyped className='consultations_main_section__title' strings={["Олеся Золотарева"]} startDelay={800} typeSpeed={80}/>
                </div>
                {/*<h1 className='consultations_main_section__title'>Олеся Золотарева</h1>*/}
                <p className='consultations_main_section__description'>Практикующий нутрициолог, специалист по
                    питанию и модификации образа жизни, натуропат. Опыт работы более 5 лет.</p>
                <div className="consultations_main_section__buttons_container">
                    <a href="#"
                       className="btn_consultations btn_consultations__primary consultations_main_section__link">Записаться</a>
                    <a href="#"
                       className="btn_consultations btn_consultations__secondary consultations_main_section__link">Подробнее</a>
                </div>
            </div>
        </section>
    )
}

export default ConsultationsMainSection;