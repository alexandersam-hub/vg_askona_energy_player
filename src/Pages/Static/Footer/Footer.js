import React, {useEffect, useState} from 'react';
import s from './Footer.module.css'
import config from '../../../config';
import imgBatteryZero from '../resource/img/battery/battery_zero.png'
import imgBatteryLow from '../resource/img/battery/battery_low.png'
import imgBatteryHalf from '../resource/img/battery/battery_half.png'
import imgBatteryFull from '../resource/img/battery/battery_full.png'
import imgLightning from '../resource/svg/battery/lightning.svg'

const Footer = ({day, score,user}) => {
    let batteryImg = null
    let classBattery = null
    if(score&&score.score<=0){
        batteryImg = imgBatteryZero
        classBattery = s.battery_zero
    }else if(score&&score.score>0 && score.score<50){
        batteryImg = imgBatteryLow
        classBattery = s.battery_low
    } else if(score&&score.score>49 && score.score<100){
        batteryImg = imgBatteryHalf
        classBattery = s.battery_half
    }else if(score&&score.score>99){
        batteryImg = imgBatteryFull
        classBattery = s.battery_full
    }else{
        batteryImg = null
        classBattery = null
    }
    
    const [additionalScore, setAdditionalScore] = useState([])
    useEffect(()=>{
        if(!score)
            return
        const aScore = []
        for(let key in score.additionalScore){
            aScore.push({score:score.additionalScore[key], name:key})
        }
        console.log(aScore);
        setAdditionalScore(aScore)
    },[score])
    return (
        <div className={s.wrapper}>
            {user?<div className={s.team_name}>Название вашей команды: {user}</div>:<></>}
            { score && score.score>=0?
            <div className={s.wrapper_score}>
                        <img className={classBattery} src={batteryImg} alt="" />
                        <div className={s.score_text}>
                            {score.score}
                        </div>
                        <img className={s.img_lightning} src={imgLightning} alt="" />
                {additionalScore.map((s,i)=>{
                    return(
                        <span key={'score_additional_'+i}>{config.scoreLocalName[s.name]} : {s.score}</span>
                    )
                })}
            </div>:
            <></>
            }
            <div>{score?<></>:<></>}</div>
        </div>
    );
};

export default Footer;