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
import Link from "next/link";

const Header = ({navigationItems}: any) => {
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
                    <div className="header__logo"><a className='header__logo_link' href="https://olesyazolotareva.com.ua/">Олеся Золотарева</a></div>
                    <nav className='header__nav nav'>
                        <ul className='nav__list'>
                            {navigationItems.map((item: any) => <li key={item.link} className='nav__list_item'><a
                                className='nav__list_link' href={item.link}>{item.title}</a></li>)}
                            <li className='nav__list_item'><Link className='nav__list_link' href='/consultations'>Консультации</Link></li>
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
                                    <a href="https://www.instagram.com/olesya_prohealth" target='_blank'
                                       className="nav__popover_link">
                                        <IconButton aria-label="delete" size="large">
                                            <InstagramIcon fontSize="inherit" sx={{color: '#252424'}}/>
                                        </IconButton>
                                    </a>
                                    <a href="https://t.me/olesya_healthcoach" target='_blank'
                                       className="nav__popover_link">
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