import CheckCircleRoundedIcon  from '@mui/icons-material/CheckCircleRounded';

const ConsultationsTariffs = () => {
    return (
        <section className="consultations_tariffs">
            <div className="consultations_tariffs__container container">
                <div className="consultations_tariffs__card">
                    <h3 className="consultations_tariffs__card_title">Пакет питания</h3>
                    <p className="consultations_tariffs__card_price"><span className="consultations_tariffs__card_price_strong">120</span> $</p>
                    <ul className="consultations_tariffs__card_list">
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Рекомендации по питанию и коррекция рациона с целью оздоровления и снижения веса</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Коррекция пищевых привычек</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Консультация 1 час онлайн</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Сопровождение в чате 1 месяц после консультации</li>
                    </ul>
                    <a href="#" className="btn_consultations btn_consultations__primary consultations_tariffs__card_link">Записаться</a>
                </div>
                <div className="consultations_tariffs__card">
                    <h3 className="consultations_tariffs__card_title">Пакет Lite</h3>
                    <p className="consultations_tariffs__card_price"><span className="consultations_tariffs__card_price_strong">130</span> $</p>
                    <ul className="consultations_tariffs__card_list">
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Видео консультация 1 час онлайн</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Разбор анализов, изучение анамнеза</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Рекомендации по образу жизни, питанию, нутрицевтикам на 2-3 месяца</li>
                    </ul>
                    <a href="#" className="btn_consultations btn_consultations__primary consultations_tariffs__card_link">Записаться</a>
                </div>
                <div className="consultations_tariffs__card">
                    <h3 className="consultations_tariffs__card_title">Standart 1 месяц</h3>
                    <p className="consultations_tariffs__card_price"><span className="consultations_tariffs__card_price_strong">200</span> $</p>
                    <ul className="consultations_tariffs__card_list">
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Видео консультация 1 час онлайн</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Разбор анализов, изучение анамнеза</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Рекомендации по образу жизни, питанию, нутрицевтикам</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Сопровождение 1 месяц в личном чате в Телеграмм (отвечаю на вопросы с 8.00 до 20.00 ежедневно)</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Контроль и коррекция программы / рациона</li>
                    </ul>
                    <a href="#" className="btn_consultations btn_consultations__primary consultations_tariffs__card_link">Записаться</a>
                </div>
                <div className="consultations_tariffs__card">
                    <h3 className="consultations_tariffs__card_title">Premium 3 месяца</h3>
                    <p className="consultations_tariffs__card_price"><span className="consultations_tariffs__card_price_strong">490</span> $</p>
                    <ul className="consultations_tariffs__card_list">
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Видео консультация 1 час онлайн</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Разбор анализов, изучение анамнеза</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Рекомендации по образу жизни, питанию, нутрицевтикам</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Сопровождение в личном чате в telegram 3 месяца (отвечаю на вопросы с 8.00 до 20.00 ежедневно)</li>
                        <li className="consultations_tariffs__card_list_item"><CheckCircleRoundedIcon sx={{ color: '#496e0D', mr: '10px'}} />Контроль и коррекция программы/ рациона</li>
                    </ul>
                    <a href="#" className="btn_consultations btn_consultations__primary consultations_tariffs__card_link">Записаться</a>
                </div>
            </div>
        </section>
    )
}

export default ConsultationsTariffs;