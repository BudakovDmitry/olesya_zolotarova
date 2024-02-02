import Image from "next/image";
import ListMarker from "@/public/list_marker.png";

const ConsultationsListSection = () => {
    return (
        <section className="consultations_list_section">
            <div className="consultations_list_section__container container">
                <h2 className="consultations_list_section__title">Какие проблемы решаем на консультации:</h2>
                <ul className="consultations_list_section__list">
                    <li className="consultations_list_section__list_item">
                        <span className='consultations_list_section__list_item_text'>Лишний вес</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Нарушения работы ЖКТ (кандидоз, дисбактериоз, СИБР, СИГР, застой желчи, язвы, эррозии, рефлюксы)</span>
                    </li>
                    <li className="consultations_list_section__list_item">
                                                <span
                                                    className='consultations_list_section__list_item_text'>Нарушение работы щитовидной железы</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Постковид</span>
                    </li>
                    <li className="consultations_list_section__list_item">
                        <span className='consultations_list_section__list_item_text'>Переедание, тяга к вредным продуктам</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Апатия, хроническая усталость, сонливость (СУН, митохондриальная дисфункция, хроническое воспаление)</span>
                    </li>
                    <li className="consultations_list_section__list_item">
                        <span className='consultations_list_section__list_item_text'>Проблемы с концентрацией внимания, плохая память</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span
                            className='consultations_list_section__list_item_text'>Высыпания, акне, выпадение волос</span>
                    </li>
                    <li className="consultations_list_section__list_item">
                        <span className='consultations_list_section__list_item_text'>Подготовка к зачатию</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Послеродовое восстановление</span>
                    </li>
                    <li className="consultations_list_section__list_item">
                        <span className='consultations_list_section__list_item_text'>Низкое либидо</span>
                        <Image src={ListMarker} alt="List marker"
                               className='consultations_list_section__list_item_icon' unoptimized/>
                        <span className='consultations_list_section__list_item_text'>Плаксивость, нервозность</span>
                    </li>
                    {/*<li className="consultations_list_section__list_item thirteen">*/}
                    {/*    <span className='consultations_list_section__list_item_text'>Восполнение дефицитов, улучшение качества жизни</span>*/}
                    {/*    <Image src={ListMarker} alt="List marker"*/}
                    {/*           className='consultations_list_section__list_item_icon' unoptimized/>*/}
                    {/*</li>*/}
                </ul>
                {/*<ul className="consultations_list_section__list">*/}
                {/*    <li className="consultations_list_section__list_item one">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Лишний вес</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item two">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Нарушения работы ЖКТ (кандидоз, дисбактериоз, СИБР, СИГР, застой желчи, язвы, эррозии, рефлюксы)</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item three">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Нарушение работы щитовидной железы</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item four">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Постковид</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item five">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Переедание, тяга к вредным продуктам</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item six">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Апатия, хроническая усталость, сонливость (СУН, митохондриальная дисфункция, хроническое воспаление)</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item seven">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Проблемы с концентрацией внимания, плохая память</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item eight">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Высыпания, акне, выпадение волос</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item nine">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Подготовка к зачатию</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item ten">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Послеродовое восстановление</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item eleven">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Низкое либидо</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item twelve">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Плаксивость, нервозность</span>*/}
                {/*    </li>*/}
                {/*    <li className="consultations_list_section__list_item thirteen">*/}
                {/*        <Image src={ListMarker} alt="List marker"*/}
                {/*               className='consultations_list_section__list_item_icon' unoptimized/>*/}
                {/*        <span className='consultations_list_section__list_item_text'>Плаксивость, нервозность</span>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </section>
    )
}

export default ConsultationsListSection;