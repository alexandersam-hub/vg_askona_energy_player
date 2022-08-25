import React from 'react';
import s from './ShopPage.module.css'
import imgLightning from '../../Static/resource/svg/battery/lightning_black.svg'

const ShopPage = ({isBuy,buyAmmunition,score,setNavigation}) => {
    const price = 30
    return (
        <div className={s.wrapper}>
            <div className={s.back} onClick={()=>setNavigation('home')}><span>{'Назад'}</span></div>
            <div className={s.shop_name}>Энергомаг</div>
            <div className={s.shop_words} >Ваш партнер в области технологий</div>
            <div className={s.wrapper_table}>
            <table className={s.prices_table}>
                <tbody>
                    <tr>
                        <th>

                        </th>
                        <th>
                            Наименование
                        </th>
                        <th>
                            Цена
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                    <tr className={s.row1}>
                        <td></td>
                        <td className={s.empty}>Схема сборки энергетической станции</td>
                        {isBuy? <td>Товар приобретен</td>:<td>30 <img src={imgLightning} alt="" /></td>
                            }
                        <td>
                            <span onClick={()=>{if(price<=score.score && !isBuy)buyAmmunition(price, 'energo')}} className={score.score>=price&&!isBuy?s.active_button_buy:s.button_buy}>Купить</span></td>
                    </tr>
                    <tr className={s.row2}>
                        <td></td>
                        <td className={s.empty}>Экзоскелет повышенной проходимости</td>
                        <td>Нет в наличии</td>
                        <td> <span className={s.button_buy}>Купить</span></td>
                    </tr>
                    <tr className={s.row1}>
                        <td></td>
                        <td className={s.empty}>Криогенная универсальная капсула</td>
                        <td>Нет в наличии</td>
                        <td> <span className={s.button_buy}>Купить</span></td>
                    </tr>
                    <tr className={s.row2}>
                        <td></td>
                        <td className={s.empty}>Генератор силового поля</td>
                        <td>Нет в наличии</td>
                        <td> <span className={s.button_buy}>Купить</span></td>
                    </tr>
                    <tr className={s.row1}>
                        <td></td>
                        <td className={s.empty}>Портальная пушка</td>
                        <td>Нет в наличии</td>
                        <td> <span className={s.button_buy}>Купить</span></td>
                    </tr>
                    <tr className={s.row2}>
                        <td></td>
                        <td className={s.empty}>Ионный дефибулизатор</td>
                        <td>Нет в наличии</td>
                        <td> <span className={s.button_buy}>Купить</span></td>
                    </tr>
                </tbody>    
            </table>   
            </div>
        </div>

    );
};

export default ShopPage;