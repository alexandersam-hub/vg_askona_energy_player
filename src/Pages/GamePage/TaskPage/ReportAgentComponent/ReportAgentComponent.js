import React from 'react';
import s from './ReportAgentComponent.module.css'

const ReportAgentComponent = ({isAgentMessage, agentMessage}) => {

    return (
        <>
            {isAgentMessage?
                <div className={s.wrapper}>{agentMessage?agentMessage.message:''}</div>:
                <></>
            }
        </>
    );
};

export default ReportAgentComponent;