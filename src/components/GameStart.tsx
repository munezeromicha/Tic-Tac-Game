import logo from '../assets/logo.svg'
import iconx from '../assets/icon-x.png'
import restart from '../assets/icon-restart.svg';
import './GameStart.css'
import { useNavigate } from 'react-router-dom';
export const GameStart = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
    <div className='top'>
        <img src={logo} alt="logo" className='logo'/>
        <div>
        <button className='btn-1' onClick={()=>navigate('/return')}><img src={iconx} alt="" className='img-2'/><h3>TURN</h3></button>
        </div>
        <div>
        <button className='btn-2'><img src={restart} alt="" /></button>
        </div>
    </div>
    <div className='middle'>
        <button className='mid-btn'></button>
        <button className='mid-btn' ></button>
        <button className='mid-btn'></button>
    </div>
    <div className='middle-2'>
        <button className='mid-btn'></button>
        <button className='mid-btn'></button>
        <button className='mid-btn'></button>
    </div>
    <div className='middle-3'>
        <button className='mid-btn'></button>
        <button className='mid-btn'></button>
        <button className='mid-btn'></button>
    </div>
    <div className='bottom'>
        <button className='mid-btn-11'><span className='inside-btn'><p className='text-1'>X (YOU)</p><p className='text-2'>0</p></span></button>
        <button className='mid-btn-12'><span className='inside-btn'><p className='text-1'>TIES</p><p className='text-2'>0</p></span></button>
        <button className='mid-btn-13'><span className='inside-btn'><p className='text-1'>O (CPU)</p><p className='text-2'>0</p></span></button>
    </div>
</div>
  )
}
