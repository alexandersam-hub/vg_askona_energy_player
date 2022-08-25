import React from 'react';
import TimerComponent from '../../../Static/TimerComponent/TimerComponent';

const WaitingTask = ({time}) => {
    return (
        <div>
            <div>Ждем окончание раунда</div>
            <TimerComponent time={time}/>
        </div>
    );
};

export default WaitingTask;