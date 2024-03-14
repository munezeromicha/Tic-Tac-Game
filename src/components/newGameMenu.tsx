import '../components/NewGame.css'
import logo from '../assets/logo.png';
import iconX from '../assets/icon-x.png';
import iconOut from '../assets/icon-o.svg'
import { useNavigate } from 'react-router-dom';
export const NewGameMenu = () => {
  const navigate = useNavigate();
  return (
    <div className='newGameDiv'>
      <img src={logo} id='image'/>
      <div className="pickBox">
        <h5 className='text-5'>PICK PLAYER 1'S MARK</h5>
        <div className="innerBox">
          <div className="img-x-div">
            <img src={iconX} className='img'/>
          </div>
          <div className="img-o-div">
            <img src={iconOut} className='img'/>
          </div>
        </div>
        <h4 className='h-bottom'>REMEMBER : X GOES FIRST</h4>
      </div>
      <button className='newGameBtnCPU' onClick={()=> navigate('/game')}>NEW GAME (VS CPU)</button>
      <button className='newGameBtnPlayer' onClick={()=>navigate('/players')}>NEW GAME (VS PLAYER)</button>
    </div>
  )
}
