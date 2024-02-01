'use client'

import { useState, MouseEvent } from "react";
import {motion} from "framer-motion"
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import Drawer from "@/app/components/Drawer";
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <header id='header' className='header'>
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
                            <li className='nav__list_item'><a className='nav__list_link' href="#about_me">Обо мне</a>
                            </li>
                            <li className='nav__list_item'><a className='nav__list_link' href="#about_intensive">Про
                                интенсив</a>
                            </li>
                            <li className='nav__list_item'><a className='nav__list_link' href="#tariffs">Тарифы</a></li>
                            <li className='nav__list_item'>
                                <button className='nav__list_link' aria-describedby={id}
                                        onClick={handleClick}>Контакты
                                </button>
                            </li>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <Stack direction="row" spacing={1} sx={{padding: '7px 15px'}}>
                                    <a href="https://www.instagram.com/olesya_prohealth" target='_blank' className="nav__popover_link">
                                        <IconButton aria-label="delete" size="large">
                                            <InstagramIcon fontSize="inherit" sx={{color: '#252424'}}/>
                                        </IconButton>
                                    </a>
                                    <a href="https://t.me/olesya_healthcoach" target='_blank' className="nav__popover_link">
                                        <IconButton aria-label="delete" size="large">
                                            <TelegramIcon fontSize="inherit" color='primary'/>
                                        </IconButton>
                                    </a>
                                </Stack>
                            </Popover>
                        </ul>
                        {/*<LanguageSwitcher/>*/}
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