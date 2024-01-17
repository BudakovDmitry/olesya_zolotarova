import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

import '../styles/main.scss'
import Image from "next/image";
import MainPhoto from '../../public/main_photo.jpg'


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
                    <Image src={MainPhoto} alt="main_photo" className='main_section__photo' unoptimized />
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
            </main>
        </>
    );
}

export default Home