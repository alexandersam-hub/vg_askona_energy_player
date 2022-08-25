import React from 'react'
import circle_font from './Pages/Static/resource/fonts/stylesheet.css'
import Cookies from 'js-cookie';
import './App.css';
import s from './app.module.css'
import GamePage from './Pages/GamePage/GamePage';
import NavBar from './Pages/Static/NavBar/NavBar';
import AuthPage from './Pages/AuthPage/AuthPage'
import backgroundImg from './Pages/Static/resource/img/background.png'

function App() {
  const token = Cookies.get('token')
  let Component
  if (token){
    Component = <GamePage token={token}/>
  }else{
    Component = <AuthPage/>
  }

  return (
    <div className="App">
      <NavBar/>
      {/* <img className={s.background_img} src={backgroundImg} alt="" /> */}
    {Component}
    </div>
  );
}

export default App;
