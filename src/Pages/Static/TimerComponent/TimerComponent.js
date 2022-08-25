import React from 'react';
import s from './TimerComponent.module.css'

const TimerComponent = ({time,title}) => {
    if(time < 0)
        return(
            <></>   
        )
        const minute = Math.floor(time/60)
        const seconds = time - minute * 60
    return (
        <div className={s.wrapper}>
            <span className={s.text_round_close}>{title?title:'До конца задания'}</span> 
            <span className={s.timer}>
                <span className={'unselectext'}>{minute>9?minute:'0'+minute}</span> : <span>{seconds>9?seconds:'0'+seconds}</span>
            </span>
        </div>
    );
};

export default TimerComponent;