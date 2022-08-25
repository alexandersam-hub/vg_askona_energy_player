import React from 'react';
import AdditionalTask from './AdditionalTask/AdditionalTask';
import ChoiceTaskPage from './TaskTypePage/ChoiceTaskPage/ChoiceTaskPage';
import EventPage from './TaskTypePage/EventPage/EventPage';
import PairTaskPage from './TaskTypePage/PairTaskPage/PairTaskPage';
import TaskPage from './TaskTypePage/TaskPage/TaskPage';
import WaitingTask from './WaitingTask/WaitingTask';

const TaskWrapperPage = ({task, sendAnswer, sendChoice, time, game}) => {
    // console.log('game', game);
    if(!game || !task || !task.type )
        return(<></>)
    switch(task.type){
        case 'event':
            return (
                <EventPage time={time} event={task}/>
            )
        case 'task':
            return(
                <TaskPage time={time} task={task} sendAnswer={sendAnswer} />
            )    
        case 'pairTask':
            return(
                <PairTaskPage roundTime={game.timeRound} time={time} task={task} sendAnswer={sendAnswer} />
            )    
        case 'ChoiceTaskPage':
            return(
                <ChoiceTaskPage time={time} task={task} sendChoice={sendChoice} sendAnswer={sendAnswer} />
            )
        case 'additionalQuest':
            return(
                <AdditionalTask  time={time} task={task}  sendAnswer={sendAnswer} />
            )
        case 'waiting':
            return(
                <WaitingTask  time={time} />
            )

        default:
            return <></>
    }
};

export default TaskWrapperPage;