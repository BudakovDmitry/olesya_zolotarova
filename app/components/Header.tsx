'use client'

import {motion} from "framer-motion"
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import Drawer from "@/app/components/Drawer";

const Header = () => {
    return (
        <header className='header'>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ease: "easeOut", duration: 1}}
                viewport={{once: true}}
            >
                <div className='container header__container'>
                    <div className="header__logo"><a className='header__logo_link' href="#">Олеся Золотарева</a></div>
                    <nav className='header__nav nav'>
                        <ul className='nav__list'>
                            <li className='nav__list_item'><a className='nav__list_link' href="#">Обо мне</a></li>
                            <li className='nav__list_item'><a className='nav__list_link' href="#">Про интенсив</a>
                            </li>
                            <li className='nav__list_item'><a className='nav__list_link' href="#">Тарифы</a></li>
                            <li className='nav__list_item'><a className='nav__list_link' href="#">Контакты</a></li>
                        </ul>
                        <LanguageSwitcher/>
                    </nav>
                    <div className="header__drawer">
                        <Drawer/>
                    </div>
                </div>
            </motion.div>
        </header>
    )
}

export default Header;