import React,{useEffect} from 'react';
import backSvg from '../../../Static/resource/svg/back2.svg'
import s from './ScorePage.module.css'

const ScorePage = ({setNavigation, scores, user}) => {
    useEffect(() => {
        scores.sort((a,b)=>b.score - a.score)
    }, [scores]);
    return (
        <div className={s.wrapper}>
            <div className={s.back} onClick={()=>setNavigation('home')}> <span>{'Назад'}</span></div>
            <div className={s.title}>Текущий счет команд</div>
            {scores.length>0?
            <table className={s.table_score}>
            <tbody>
                <tr>
                    <th></th>
                    <th>команда</th>
                    <th>счет</th>
                </tr>
                {scores.map((score,i)=>{
                    
                    return(
                        <tr key={'score_team_row_'+i} className={user===score.team?s.active_row_team:s.row_team}>
                        <td>{i+1}</td>
                        <td className={s.team_name}>{score.team}</td>
                        <td>{score.score}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>:<></>
        }
            
        </div>
    );
};

export default ScorePage;