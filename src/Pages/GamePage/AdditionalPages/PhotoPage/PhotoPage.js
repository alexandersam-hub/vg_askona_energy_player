import React from 'react';
import s from './PhotoPage.module.css'

const PhotoPage = ({setNavigation}) => {
    return (
        <div className={s.wrapper}>
                <div className={s.back} onClick={()=>setNavigation('home')}><span>{'Назад'}</span></div>
        </div>
    );
};

export default PhotoPage;