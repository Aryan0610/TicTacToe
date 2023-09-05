import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';
import { useState } from 'react';
import Sidepanel from './components/Sidepanel';

function App() {
  const [XTurn, setXTurn] = useState(true)
  const [GridComponent, setGridComponent] = useState(Array(9).fill(''))
  const [GameEnd, setGameEnd] = useState(false)
  const [Score, setScore] = useState({XWins: 0, OWins: 0, Draws: 0})
  const [Count, setCount] = useState(0)

  function ResetFunction(Component) {
    if (Component === 'Grid') {
      setGridComponent(Array(9).fill(''))
    }
  }

  return (
    <div className="App">
      <div className='Header'>
        Tic Tac Toe
      </div>
      
      <div className='HeroSection'>
        <Grid XTurn={XTurn} setXTurn={setXTurn} GridComponent={GridComponent} setGridComponent={setGridComponent} Score={Score} setScore={setScore} ResetFunction={ResetFunction} GameEnd={GameEnd} setGameEnd={setGameEnd}/>
        <Sidepanel Score={Score} ResetFunction={ResetFunction} GameEnd={GameEnd} setGameEnd={setGameEnd} XTurn={XTurn}/>
      </div>
    </div>
  );
}

export default App;
