import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

import '../styles/main.scss'
import Image from "next/image";
import MainPhoto from '../../public/main_photo.jpg'
import AboutMePhoto from '../../public/about_me_photo.jpg'
import ListMarker from '../../public/list_marker.png'


const Home = ({params: {locale}}: any) => {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Home');
    const languages = ['uk', 'ru']

    return (
        <>
            <header className='header'>
                <div className='container header__container'>
                    <div className="header__logo"><a className='header__logo_link' href="#">Олеся Золотарева</a></div>
                    <nav className='header__nav nav'>
                        <ul className='nav__list'>
                            <li className='nav__list_item'><a className='nav__list_link' href="#">Обо мне</a></li>
                            <li className='nav__list_item'><a className='nav__list_link' href="#">Про интенсив</a></li>
                            <li className='nav__list_item'><a className='nav__list_link' href="#">Тарифы</a></li>
                            <li className='nav__list_item'><a className='nav__list_link' href="#">Контакты</a></li>
                        </ul>
                    </nav>
                    <LanguageSwitcher options={languages} />
                </div>
            </header>
            <main className='main'>
                <section className='main_section'>
                    <Image src={MainPhoto} alt="Main photo" className='main_section__photo' unoptimized />
                    <div className="main_section__content container">
                        <div className="main_section__content_container">
                            <h2 className='main_section__subtitle'>Интенсив</h2>
                            <h1 className='main_section__title'>ПЕРЕЗАГРУЗКА</h1>
                            <p className='main_section__description'>Перезагрузите свои привычки и питание со мной всего
                                за 10 дней</p>
                            <div className="main_section__button_container">
                                <a href="#" className='btn btn__primary main_section__button'>Учавстовать</a>
                                <a href="#" className='btn btn__secondary main_section__button'>подробнее</a>
                            </div>
                        </div>
                    </div>
                </section>
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
                <section className="about_me_section">
                    <div className="container">
                        <h2 className="title_section title_section-dark about_me_section__title_section">Обо мне</h2>
                        <div className="about_me_section__content">
                            <div className="about_me_section__image_block">
                                <div className="about_me_section__image_bg"></div>
                                <Image src={AboutMePhoto} alt="About me photo" className='about_me_section__image' unoptimized />
                            </div>
                            <div className="about_me_section__text_block">
                                <p className="about_me_section__title">Здравствуйте, меня зовут Олеся Золотарева</p>
                                <p className="about_me_section__subtitle">Я практикующий нутрициолог, диетолог, специалист по модификации образа жизни, натуропат.</p>
                                <ul className="about_me_section__list">
                                    <li className="about_me_section__list_item">
                                        <Image src={ListMarker} alt="List marker" className='about_me_section__list_item_icon' unoptimized />
                                        <span className='about_me_section__list_item_text'>Даю инструменты как стать здоровой</span>
                                    </li>
                                    <li className="about_me_section__list_item">
                                        <Image src={ListMarker} alt="List marker" className='about_me_section__list_item_icon' unoptimized />
                                        <span className='about_me_section__list_item_text'>Меняю пищевые привычки; научу как стать стройной и удержать вес</span>
                                    </li>
                                    <li className="about_me_section__list_item">
                                        <Image src={ListMarker} alt="List marker" className='about_me_section__list_item_icon' unoptimized />
                                        <span className='about_me_section__list_item_text'>Устраняю дефициты и хронические состояния</span>
                                    </li>
                                    <li className="about_me_section__list_item">
                                        <Image src={ListMarker} alt="List marker" className='about_me_section__list_item_icon' unoptimized />
                                        <span className='about_me_section__list_item_text'>Занимаюсь подбором персонализированного плана питания.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home