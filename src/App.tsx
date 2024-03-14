import  {NewGameMenu}  from './components/newGameMenu';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameActive } from './components/GameActive';
import { GameStart } from './components/GameStart';
import { MultiplePlayer } from './components/MultiplePlayer'; 
import { PlayerWon  } from './components/PlayerWon';
import { SoloWon } from './components/SoloWon';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewGameMenu />} />
          <Route path='/game' element={<GameActive />} />
          <Route path='/return' element={<NewGameMenu />} />
          <Route path='/restart' element={<GameStart/>} />
          <Route path='/players' element={<MultiplePlayer/>} />
          <Route path='/playerWon' element={<PlayerWon/>} />
          <Route path='/playerWon' element={<PlayerWon/>} />
          <Route path='/solo' element={<SoloWon/>} />
          

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
