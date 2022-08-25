import React, {useState} from 'react';
import backSvg from '../../../Static/resource/svg/back2.svg'
import s from './AgentPage.module.css'

// sendAgentKey={sendAgentKey} 
// agentMessage={agentMessage}
// isAgentMessage={isAgentMessage}

const AgentPage = ({setNavigation, sendAgentKey,agentMessage ,isAgentMessage}) => {
    const [key, setKey] = useState('')
    // if (isAgentMessage){
    //     if(agentMessage.isTrue)
    //         setKey('')
    // }
    return (
        <div className={s.wrapper}>
            <div className={s.back} onClick={()=>setNavigation('home')}> <span>{'Назад'}</span></div>
            <div className={s.text}>Введите ключ, который вы узнали у агента</div>
            <input  placeholder='ключ' className={s.input_box_answer} type={'text'} value={key} onChange={(e)=>setKey(e.target.value.trim().toLowerCase())}/>
            <div onClick={()=>{sendAgentKey(key)}} className={'universal_btn_short'}>Отправить</div>
            {isAgentMessage && agentMessage.isTrue?<div>Ключ принят. Вы получили +{agentMessage.price} баллов</div>:<></>}
            {isAgentMessage && !agentMessage.isTrue?<div>{agentMessage.message}</div>:<></>}
        </div>
    );
};

export default AgentPage;