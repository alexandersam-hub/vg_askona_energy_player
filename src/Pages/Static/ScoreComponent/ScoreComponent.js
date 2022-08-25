import React, { useEffect, useState } from 'react';
import config from '../../../config';

const ScoreComponent = ({score}) => {
    const [additionalScore, setAdditionalScore] = useState([])
    useEffect(()=>{
        const aScore = []
        for(let key in score.additionalScore){
            aScore.push({score:score.additionalScore[key], name:key})
        }
        console.log(aScore);
        setAdditionalScore(aScore)
    },[score])

    return (
        <div>
            <div>Текущий счет: {score.score}</div>
            <div>
                {additionalScore.map((s,i)=>{
                    return(
                        <div key={'score_additional_'+i}>{config.scoreLocalName[s.name]} : {s.score}</div>
                    )
                })}
            </div>
        </div>
    );
};

export default ScoreComponent;