import React, { useState } from 'react';
import s from './PairTaskPage.module.css'
import TimerComponent from '../../../../Static/TimerComponent/TimerComponent';
import locationImg from '../../../../Static/resource/svg/location.svg'

const PairTaskPage = ({task, sendAnswer, time, roundTime}) => {
    // const [key, setKey] = useState('')
    return (
        <div className={s.wrapper}>
            <div  className={s.count_duration}>{ task.currentDuration} раунд из {task.countDuration} </div>
            <div className={s.wrapper_timer}>
                <TimerComponent time={time + (task.countDuration - task.currentDuration)*roundTime}/>
            </div>
            
            {/* <div  className={s.title}>{task.title}</div> */}
            <div><img className={s.img_location} src={locationImg} alt="" /> <span className={s.location}>{task.location}</span></div>
            <div className={s.text_task}>{task.text}</div>
            {/* <input  className={s.input_box_answer} placeholder={'Вариант ответа'} type={'text'} value={key} onChange={e=>setKey(e.target.value)} />
            <div onClick={()=>{sendAnswer(key.trim().toLowerCase(), task)}} className={'universal_btn_short'}>Ответить</div> */}
        </div>
    );
};

export default PairTaskPage;