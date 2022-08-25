import React from 'react';
import TimerComponent from '../../../Static/TimerComponent/TimerComponent';
import s from './AdditionalTask.module.css'

const AdditionalTask = ({task, time, sendAnswer}) => {
    return (
        <div>
            AdditionalTask
            <TimerComponent time={time}/>
            <div>{task.title}</div>
            <div>{task.text}</div>
            {task.changes.map((choice, index)=>{
                return(
                    <div key={'row_choice_task_'+index}>
                        <div onClick={()=>{
                            console.log('!!!',index,task);
                            sendAnswer(index, task)
                        }} className={s.btn_choice}>{choice.text}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default AdditionalTask;