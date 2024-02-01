'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import {MouseEvent, useState} from "react";

type Anchor = 'top';

const TemporaryDrawer = () => {
    const [state, setState] = React.useState({
        top: false,
    });

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>, anchor: any) => {
        toggleDrawer(anchor, false)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{width: 'auto', padding: '32px 17px 0px 23px', backgroundColor: '#F3F3F3', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <ul className='nav__list_mobile'>
                <li className='nav__list_item_mobile'><a className='nav__list_link_mobile' href="#about_me" onClick={toggleDrawer(anchor, false)}>Обо мне</a></li>
                <li className='nav__list_item_mobile'><a className='nav__list_link_mobile' href="#about_intensive" onClick={toggleDrawer(anchor, false)}>Про интенсив</a></li>
                <li className='nav__list_item_mobile'><a className='nav__list_link_mobile' href="#tariffs" onClick={toggleDrawer(anchor, false)}>Тарифы</a></li>
                <li className='nav__list_item_mobile'><button className='nav__list_link_mobile' aria-describedby={id} onClick={(e) => handleClick(e, anchor)}>Контакты</button></li>
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
            {/*<LanguageSwitcher />*/}
        </Box>
    );

    return (
        <div>
            {(['top'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}
                                size="large"
                                aria-label="menu"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default TemporaryDrawer;