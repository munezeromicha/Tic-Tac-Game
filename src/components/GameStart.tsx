import logo from '../assets/logo.svg'
import iconx from '../assets/icon-x.png'
import restart from '../assets/icon-restart.svg';
import './GameStart.css'
import { useNavigate } from 'react-router-dom';
export const GameStart = () => {
  const navigate = useNavigate();
  return (
    <div className='container-start'>
    <div className='top-start'>
        <img src={logo} alt="logo" className='logo-start'/>
        <button className='btn-1-start' onClick={()=>navigate('/return')}><img src={iconx} alt="" className='img-2-start'/><h3>TURN</h3></button>
        <button className='btn-2-start'><img src={restart} alt="" /></button>
    </div>
    <div className='middle-start'>
        <button className='mid-btn-start'></button>
        <button className='mid-btn-start' ></button>
        <button className='mid-btn-start'></button>
    </div>
    <div className='middle-2-start'>
        <button className='mid-btn-start'></button>
        <button className='mid-btn-start'></button>
        <button className='mid-btn-start'></button>
    </div>
    <div className='middle-3-start'>
        <button className='mid-btn-start'></button>
        <button className='mid-btn-start'></button>
        <button className='mid-btn-start'></button>
    </div>
    <div className='bottom-start'>
        <button className='mid-btn-11-start'><span className='inside-btn-start'><p className='text-1-start'>X (YOU)</p><p className='text-2-start'>0</p></span></button>
        <button className='mid-btn-12-start'><span className='inside-btn-start'><p className='text-1-start'>TIES</p><p className='text-2-start'>0</p></span></button>
        <button className='mid-btn-13-start'><span className='inside-btn-start'><p className='text-1-start'>O (CPU)</p><p className='text-2-start'>0</p></span></button>
    </div>
</div>
  )
}
