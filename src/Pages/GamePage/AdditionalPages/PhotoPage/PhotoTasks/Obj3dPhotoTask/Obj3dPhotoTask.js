import React,{useState} from 'react';
import s from './Obj3dPhotoTask.module.css'
import backSvg from '../../../../../Static/resource/svg/back2.svg'
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
import Loader from '../../../../../Static/Loader/Loader'
const Obj3dPhotoTask = ({goBack, data}) => {
    const [load, setLoad] = useState(false)
    return (
        <div>
            <div className={s.back} onClick={goBack}><img src={backSvg} alt="" /> <span>{'Назад'}</span></div>
            obj3dPhotoTask
            {data.text?<div>{data.text}</div>:<></>}
            <div  style={{margin:'auto', textAlign:'center'}}>
                {!load?<Loader />:<></>}
            <GLTFModel
                width={ window.innerWidth}
                position={{ x: 0, y: 1, z: 0.7 }}
                rotation ={{x: 0, y: 0, z: 0}}
                onLoad={()=>{
                    setTimeout(()=>{setLoad(true)},1200)
                    
                }} src={`/resource_task/models/${data.src}/${data.src}.gltf`}>
                <AmbientLight color={0xffffff} />
                <DirectionLight
                    color={0xffffff}
                    position={{ x: 100, y: 200, z: 100 }}
                />
                <DirectionLight
                    color={0xffffff}
                    position={{ x: -100, y: 200, z: -100 }}
                />
            </GLTFModel>
        </div>
        </div>
    );
};

export default Obj3dPhotoTask;