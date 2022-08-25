import React from 'react';
import s from './FinishGame.module.css'

const FinishGame = () => {
    return (
        <div className={s.wrapper}>
        <div className={s.title}>Поздравляем! 
</div>
<div className={s.text}>
Планета изучена и все испытания пройдены. 
</div>
<div className={s.text}>
Дело осталось за малым, но очень важным этапом.
</div>
<div className={s.final_text}> 
Встречаемся у финального задания!
</div>
        </div>
    );
};

export default FinishGame;