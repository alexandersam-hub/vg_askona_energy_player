import React from 'react';
import s from './StartGame.module.css'

const StartGame = ({game,user}) => {
    return (
        <div className={s.wrapper}>
          
            <div className={s.game_name}>{game.gameName}</div>
            <div className={s.text1}>Участники Миссии 2.0, приветствуем вас в Энергополисе!</div>
<div className={s.text}>
Пришло время включиться в борьбу за обладание Энергией! Ваша новая миссия - исследовать планету и приспособиться к условиям жизни. 
    </div> 
<div className={s.text3}>Готовы к приключению?</div>
        </div>
    );
};

export default StartGame;