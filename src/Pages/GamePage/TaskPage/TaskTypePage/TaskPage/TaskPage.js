import React, { useState } from 'react';
import s from './TaskPage.module.css'
import TimerComponent from '../../../../Static/TimerComponent/TimerComponent';
import locationImg from '../../../../Static/resource/svg/location.svg'

const TaskPage = ({task, sendAnswer, time}) => {
    // console.log('task', task);
    const [key, setKey] = useState('')
    return (
        <div className={s.wrapper}>
            <TimerComponent time={time}/>    
            {/* <div className={s.title}>{task.title}</div> */}
            <div><img className={s.img_location} src={locationImg} alt="" /> <span className={s.location}>{task.location}</span></div>
            <div className={s.text_task}>{task.text}</div>
            {/* <input className={s.input_box_answer} placeholder={'Вариант ответа'} type={'text'} value={key} onChange={e=>setKey(e.target.value)} />
            <div onClick={()=>{
                sendAnswer(key.trim().toLowerCase(), task)}} className={'universal_btn_short'}>Ответить</div> */}
        </div>
    );
};

export default TaskPage;