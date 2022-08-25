import React from 'react';
// import agentSvg from '../../../Static/resource/svg/agent.svg'
import photoSvg from '../../../Static/resource/svg/photo.svg'
// import scoreSvg from '../../../Static/resource/svg/score.svg'
import shopSvg from '../../../Static/resource/svg/shop.svg'
// import mapSvg from '../../../Static/resource/svg/map.svg'
import s from './NavigationBar.module.css'

const NavigationBar = ({setNavigation}) => {
    return (
        <div>
            {/* <img onClick={()=>setNavigation('agent')} className={s.agent_img} src={agentSvg} alt="" /> */}
            {/* <img onClick={()=>window.location.href = './qr'} className={s.agent_img} src={photoSvg} alt="" /> */}
            {/* <img onClick={()=>setNavigation('score')} className={s.agent_img} src={scoreSvg} alt="" /> */}
            {/* <img onClick={()=>setNavigation('shop')} className={s.agent_img} src={shopSvg} alt="" /> */}
            {/* <img onClick={()=>setNavigation('map')} className={s.agent_img} src={mapSvg} alt="" /> */}
        </div>
    );
};

export default NavigationBar;