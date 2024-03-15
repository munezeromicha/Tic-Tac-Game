import './PlayerWon.css'
import logo from '../assets/logo.svg'
import iconx from '../assets/icon-x.png'
import restart from '../assets/icon-restart.svg';
import Yellowicon from '../assets/blue-i-o.svg'
import iconYellow from '../assets/icon-o.png'
import { useNavigate } from 'react-router-dom';
export const PlayerWon = () => {
    const navigate = useNavigate();
  return (
    <div className='general'>
    <div className='container'>
        <div className='top'>
            <img src={logo} alt="logo" className='logo'/>
            <div>
            <button className='btn-1' onClick={()=>navigate('/return')}><img src={iconx} alt="" className='img-2'/><h3>TURN</h3></button>
            </div>
            <div>
            <button className='btn-2' onClick={()=> navigate('/restart')}><img src={restart} alt="" /></button>
            </div>
        </div>
        <div className='middle'>
            <button className='mid-btn'><img src='' /></button>
            <button className='mid-btn' ><img src={iconx} /></button>
            <button className='Yellow-back'><img src={Yellowicon} /></button>
        </div>
        <div className='middle-2'>
            <button className='mid-btn'><img src={iconx} /></button>
            <button className='Yellow-back'><img src={Yellowicon} /></button>
            <button className='mid-btn'><img src={iconx} /></button>
        </div>
        <div className='middle-3'>
            <button className='Yellow-back'><img src={Yellowicon}/></button>
            <button className='mid-btn'><img src={Yellowicon} /></button>
            <button className='mid-btn'><img src={iconx} /></button>
        </div>
        <div className='bottom'>
            <button className='mid-btn-11'><span className='inside-btn'><p className='text-1'>X (YOU)</p><p className='text-2'>14</p></span></button>
            <button className='mid-btn-12' popovertarget="yourpopover"><span className='inside-btn'><p className='text-1'>TIES</p><p className='text-2'>32</p></span></button>
            <button className='mid-btn-13'><span className='inside-btn'><p className='text-1'>O (P1)</p><p className='text-2'>11</p></span></button>
        </div>
    </div>

    <div popover="auto" id="yourpopover">
        <div className='inside-pop'>
        <p>PLAYER 1 WINS!</p>
        <p id='text-pop'><img src={iconYellow} alt="" />TAKES THE ROUND</p>
        <div className='pop-btn'>
            <button className='quit'>Quit</button>
            <button className='round' onClick={()=> navigate('/restart')}>NEXT ROUND</button>
        </div>
        </div>
    </div>

    </div>
  )
}
