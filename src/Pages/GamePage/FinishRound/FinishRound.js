import React, {useEffect} from 'react';
import TimerComponent from '../../Static/TimerComponent/TimerComponent';
import s from './FinishRound.module.css'

const FinishRound = ({scores, time, currentRound, user}) => {
    useEffect(() => {    
        scores.sort((a,b)=>b.score.currentScore-a.score.currentScore)
    }, [scores]);
    return (
        <div className={s.wrapper}>
            <div className={s.timer}><TimerComponent time={time} title={'До начала следующего раунда'}/></div>
            <div className={s.round_text}>{currentRound} раунд завершен</div>
            <div className={s.result_round}>Результат раунда</div>
            <table className={s.table_score}>
                <tbody>
                    <tr>
                        <th>Команда</th>
                        <th>Баллов</th>
                        <th>Заработано</th>
                    </tr>
                    {scores?scores.map((score,index)=>{
                        if(user===score.team)
                        return(
                            <tr className={s.row_team} key={"score_round_row"+index}>
                                <td className={s.team_td}>{score.team}</td>
                                <td>{score.score.currentScore}</td>
                                <td>{score.score.difference}</td>
                            </tr>
                        )
                    }):<></>}
                </tbody>
            </table>
        </div>
    );
};

export default FinishRound;