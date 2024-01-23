'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

type Anchor = 'top';

const TemporaryDrawer = ({ languages }: any) => {
    const [state, setState] = React.useState({
        top: false,
    });

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
            sx={{width: 'auto', padding: '32px 17px 32px 23px', backgroundColor: '#F3F3F3', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <ul className='nav__list_mobile'>
                <li className='nav__list_item_mobile'><a className='nav__list_link_mobile' href="#">Обо мне</a></li>
                <li className='nav__list_item_mobile'><a className='nav__list_link_mobile' href="#">Про интенсив</a></li>
                <li className='nav__list_item_mobile'><a className='nav__list_link_mobile' href="#">Тарифы</a></li>
                <li className='nav__list_item_mobile'><a className='nav__list_link_mobile' href="#">Контакты</a></li>
            </ul>
            <LanguageSwitcher languages={languages} />
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