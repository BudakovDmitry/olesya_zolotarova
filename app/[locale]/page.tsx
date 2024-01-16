import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

import '../styles/main.scss'


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
        </>
    );
}

export default Home