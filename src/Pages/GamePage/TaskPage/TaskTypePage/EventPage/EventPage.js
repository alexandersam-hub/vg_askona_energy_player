import React from 'react';
import s from './EventPage.module.css'
import TimerComponent from '../../../../Static/TimerComponent/TimerComponent';

const EventPage = ({event, time}) => {
    return (
        <div>
            <TimerComponent time={time}/>
            <div>Игровое событие</div>
            <div>{event.text}</div>
        </div>
    );
};

export default EventPage;