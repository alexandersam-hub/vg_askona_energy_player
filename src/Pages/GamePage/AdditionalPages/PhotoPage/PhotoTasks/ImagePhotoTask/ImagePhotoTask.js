import React from 'react';
import s from './ImagePhotoTask.module.css'
import backSvg from '../../../../../Static/resource/svg/back2.svg'

const ImagePhotoTask = ({goBack, data}) => {
    return (
        <div>
            <div className={s.back} onClick={goBack}><img src={backSvg} alt="" /> <span>{'Назад'}</span></div>
            ImagePhotoTask
            {data.text?<div>{data.text}</div>:<></>}
            {data.src?
            <img src={`/resource_task/img/${data.src}.png`} alt="" />    
            :
            <></>
        }
        </div>
    );
};

export default ImagePhotoTask;