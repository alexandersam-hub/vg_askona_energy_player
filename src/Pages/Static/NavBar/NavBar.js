import React from 'react';
import s from './NavBar.module.css'
import logo_game from '../resource/svg/loga_game.svg'
import logo_firm from '../resource/svg/logo_firm.svg'

const NavBar = ({gameName}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.logo}>
                <img className={s.img_logo_game} src={logo_game} alt="logo_game" />
                <div className={s.game_name}>Энергия</div>
            </div>
            <div className={s.logo_firm}>
                <img className={s.img_logo_firm} src={logo_firm} alt="" />
            </div>
            
        </div>
    );
};

export default NavBar;