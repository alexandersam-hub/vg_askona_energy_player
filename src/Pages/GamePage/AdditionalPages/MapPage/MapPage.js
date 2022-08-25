import React from 'react';
import YMapPage from '../../../YMapPage/YMapPage';
import s from './MapPage.module.css'
// import mapImg from '../../../Static/resource/img/map.png'
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const MapPage = ({setNavigation}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.back} onClick={()=>setNavigation('home')}><span>{'Назад'}</span></div>
            {/* <TransformWrapper centerOnInit={true}>
                <TransformComponent wrapperStyle={{width:'90%',margin:'20px auto'}} >
                    <img className={s.img_map} src={mapImg} alt="Обратитесь к игротехникам, если видите эту надпись" />
                </TransformComponent>
            </TransformWrapper> */}
            <YMapPage />
        </div>
    );
};

export default MapPage;