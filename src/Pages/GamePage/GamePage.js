import React, { useEffect, useState } from 'react'
import config from '../../config'
import Loader from '../Static/Loader/Loader'
import s from './GamePage.module.css'
import StartGame from './StartGame/StartGame'
import TaskWrapperPage from './TaskPage/TaskWrapperPage'
import FinishGame from './FinishGame/FinishGame'
import Footer from '../Static/Footer/Footer'
import arrowImg from '../Static/resource/svg/arrow.svg'
import NavigationBar from './TaskPage/NavigationBar/NavigationBar'
import AgentPage from './AdditionalPages/AgentPage/AgentPage'
import PhotoPage from './AdditionalPages/PhotoPage/PhotoPage__'
import ScorePage from './AdditionalPages/ScorePage/ScorePage'
import FinishRound from './FinishRound/FinishRound'
import MapPage from './AdditionalPages/MapPage/MapPage'
import ReportAgentComponent from './TaskPage/ReportAgentComponent/ReportAgentComponent'
import ShopPage from './ShopPage/ShopPage'

const GamePage = ({token})=>{
    const [isLoad, setIsLoad] = useState(false)
    const [ws, setWs] = useState({})
    const [time, setTime] = useState(-1)
    const [gameData, setGameData] = useState({})
    const [disposition, setDisposition] = useState([])
    const [score, setScore] = useState({})
    const [countTask, setCountTask] = useState(0)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [navigation, setNavigation] = useState('home')
    const [user, setUser] = useState(null)
    const [isAgentMessage, setIsAgentMessage] = useState(false)
    const [agentMessage, setAgentMessage] = useState(null)
    const [scoreTeams, setScoreTeams] = useState([])
    const [isFinishRound, setIsFinishRound] = useState(false)
    const [scoresDifference, setScoresDifference] = useState([])
    const [keyWord, setKeyWord] = useState('')

    const sendMessage = (message)=>{
        ws.send(JSON.stringify(message))
    }
    let isConnect
    const init = ()=>{
        isConnect = false
        const ws = new WebSocket(config.SERVER_SOCKET)
        ws.onopen = ()=>{
            ws.send(JSON.stringify({
                action:'login',
                type:'player',
                token
            }))
        }
        ws.onclose = ()=>{
            setTimeout(()=>{
                init()
            },700)
        }
        ws.onmessage = (message)=>{
            if(navigation!=='home')
                return
            const data = JSON.parse(message.data)
            switch(data.action){
                case 'getName':
                
                    setUser(data.user)
                    break
                case 'time':
                    setTime(data.time)
                    break
                case 'gameData':
                    isConnect = true
                    // console.log('gameData', data);
                    if(isLoad && gameData.game && !gameData.isStart)
                        setTime(-1)
                    if(data.isViewScore){
                        setIsFinishRound(true)
                    }else{
                        setIsFinishRound(false)
                    }
                    setGameData(data)
                    break
                // eslint-disable-next-line no-fallthrough
                case 'disposition':
                    // console.log('disposition', data);
                    setDisposition(data.tasks)
                    break
                case 'score':
                    // console.log('score', data.score);
                    console.log(data.score);
                    setScore(data.score)
                    break
                case 'viewScore': // конец раунда
                    // console.log('score', data.score);
                    console.log('scoresDifference', data.scoresDifference);
                    setScoresDifference(data.scoresDifference)
                    setIsFinishRound(true)
                    break
                case 'report':
                    setIsError(true)
                    setErrorMessage(data.message)
                    setTimeout(()=>{setIsError(false)}, 1000)
                    break
                case 'reportAgent':
                    console.log('reportAgent', data);
                    setAgentMessage({isTrue:!data.warning, price:data.price?data.price:0, message:data.message})
                    setIsAgentMessage(true)
                    setTimeout(()=>{
                        setIsAgentMessage(false)
                        setAgentMessage(null)
                        setKeyWord('')
                    },1800)
                    break
                case 'scoreTeams':
                    console.log('scoreTeams',data.scores );
                    setScoreTeams(data.scores)
                    break
                default:
                    console.log(data);
                break
            }
        }
        setWs(ws)
        setIsLoad(true)
    }
    useEffect(()=>{
        init()
        setInterval(()=>{
            if(isLoad && isConnect){
                if(ws.readyState === 0){
                    init()
                }
            }
        },700)
    },[])
    
    const sendAnswer = (answer, task)=>{
        console.log('send answer');
        sendMessage({action:'pullAnswer', answer, task})
    }
    const sendAgentKey=(key)=>{
        sendMessage({action:'pullAnswer',task:{type:'agent'}, answer:key})
    }

    const buyAmmunition = (price, ammunition)=>{
        sendMessage({action:'buy', price, ammunition})
    }
    const sendChoice = (choice, taskId)=>{
        sendMessage({action:'pullChoice', choice, task:taskId})
    }

    if(gameData.isFinish){
        return(
            <>
                <div className={s.content}>
                    <FinishGame/>
                </div>
                <Footer day={gameData.currentRound+1}  score={score}/>
            </>
        )
    }

    if(isFinishRound){
        console.log(isFinishRound);
        return(
            <>
                <div className={s.content}>
                    <FinishRound user={user.stringName} currentRound={gameData.currentRound+1} scores={scoresDifference} time={time}/>
                </div>
                <Footer day={gameData.currentRound+1}  score={score}/>
            </>
        )
    }

    if (isLoad && gameData.game && !gameData.isStart)
        
        return(
            <>
                <div className={s.content}>
                    <StartGame user={user.stringName} game={gameData.game}/>
                </div>
                <Footer user={user.stringName}/>
            </>
        )
    if(isLoad && navigation!=='home')
    switch(navigation){
        case 'agent':
            return(
            <>
            <div className={s.content}>
                <AgentPage sendAgentKey={sendAgentKey} 
                            agentMessage={agentMessage}
                            isAgentMessage={isAgentMessage}
                            setNavigation={setNavigation}/>
            </div>
                <Footer day={gameData.currentRound+1}  score={score}/>
            </>
                
            )
        case 'photo':
            return(
            <>
            <div className={s.content}>
                <PhotoPage setNavigation={setNavigation}/>
            </div>
                
                <Footer day={gameData.currentRound+1}  score={score}/>
            </>
                
            )
            case 'shop':
                return(
                <>
                <div className={s.content}>
                    <ShopPage isBuy={scoreTeams?scoreTeams.find(score=>score.team === user.stringName).isBuy:false} buyAmmunition={buyAmmunition} setNavigation={setNavigation}  score={score}/>
                </div>
                    
                    <Footer day={gameData.currentRound+1}  score={score}/>
                </>
                    
                )
        case 'map':
            return(
            <>
            <div className={s.content}>
                <MapPage setNavigation={setNavigation}/>
            </div>
                
                <Footer day={gameData.currentRound+1}  score={score}/>
            </>
                
            )
        case 'score':
            return(
                <>
                <div className={s.content}>
                    <ScorePage user={user.stringName} setNavigation={setNavigation} scores={scoreTeams}/>
                </div>
                    <Footer day={gameData.currentRound+1}  score={score}/>
                </>
            )
        default:
                console.log('NAVIGATION', navigation);
                break
    }

    return isLoad?(
        <div className={s.wrapper}>
            <div className={s.content}>
            
                {disposition.length>0?
                <div>
                    {/* {disposition && disposition.length>1?
                    <>
                    {countTask>0?<img onClick={()=>{setCountTask(countTask-1)}} className={s.arrowImgDown} src={arrowImg} alt="" />:<></>}
                    {disposition.length-1>countTask?<img onClick={()=>{setCountTask(countTask+1)}} className={s.arrowImgUp} src={arrowImg} alt="" />:<></>}
                    </>
                    :<></>} */}
                    <div className={s.wrapper_team}>
                        <div className={s.team_name}>{user.stringName?<div>Ваша команда: {user.stringName}</div>:<></>}</div>
                        {disposition.length>0?<div className={s.round_count}>Раунд {gameData.currentRound+1} : {disposition.length} задания</div>:<></>}    
                    </div>
                    {/* {disposition && disposition.length>1?<div className={s.count_task}>В текущем раунде у вашей команды {disposition.length} задания</div>:<></>}
                     */}
                    <div className={s.btn_task_choice_wrapper}>
                        {disposition.length>1? disposition.map((task, index)=>{
                                return(
                                    <div className={index === countTask?s.btn_task_choice_active:s.btn_task_choice} key={'btn_task_'+index} onClick={()=>{setCountTask(index)}}>{index === 0?'Исследователи':'Скауты'}</div>
                                )
                        }):''}
                    </div>
                    
                    {  disposition.map((task, index)=>{
                        if(index === countTask)
                            return(
                                <TaskWrapperPage game={gameData.game} time={time} key={'task_team_'+index} sendChoice={sendChoice} sendAnswer={sendAnswer} task={task}/>
                            )
                    })}
                    <div className={s.wrapepr_ansver}>
                        <div>Окно ввода ответов</div>
                        <input className={s.input_box_answer} placeholder={'Вариант ответа'} type={'text'} value={keyWord} onChange={e=>setKeyWord(e.target.value)} />
                        {isAgentMessage?
                            <ReportAgentComponent agentMessage={agentMessage} isAgentMessage={isAgentMessage} />:
                            <div onClick={()=>{
                                sendAnswer(keyWord.trim().toLowerCase())}} className={'universal_btn_short'}>Ответить</div>
                        }
                    </div>
                    

                    {isError?<div>{errorMessage}</div>:<></>}
                    
                    <NavigationBar setNavigation={setNavigation}/>
                    
                    </div>:
                    <></>
                }
            </div>
            <Footer day={gameData.currentRound+1}  score={score}/>
        </div>
    ):(
        <Loader />
    )
}

export default GamePage