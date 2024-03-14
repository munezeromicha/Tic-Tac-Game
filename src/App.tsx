import  {NewGameMenu}  from './components/newGameMenu';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameActive } from './components/GameActive';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewGameMenu />} />
          <Route path='/game' element={<GameActive />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
