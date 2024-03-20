import './MultiplePlayer.css'
import logo from '../assets/logo.svg'
import iconx from '../assets/icon-x.png'
import restart from '../assets/icon-restart.svg';
import iconxout from '../assets/icon-x-outline.svg'
import icono from '../assets/icon-o.png'
import { useNavigate } from 'react-router-dom';
export const MultiplePlayer = () => {
    const navigate = useNavigate();
  return (
    <div className='container-multi'>
        <div className='top'>
            <img src={logo} alt="logo" className='logo-multi'/>
            <div>
            <button className='btn-1-multi' onClick={()=>navigate('/return')}><img src={iconx} alt="" className='img-2-multi'/><h3>TURN</h3></button>
            </div>
            <div>
            <button className='btn-2-multi' onClick={()=> navigate('/restart')}><img src={restart} alt="" /></button>
            </div>
        </div>
        <div className='mark-board'>
        <div className='middle-multi'>
            <button className='mid-btn-multi'><img src={iconxout}  className='multi-player-mark'/></button>
            <button className='mid-btn-multi' ><img src={iconx}  className='multi-player-mark'/></button>
            <button className='mid-btn-multi'><img src={icono}  className='multi-player-mark'/></button>
        </div>
        <div className='middle-2-multi'>
            <button className='mid-btn-multi'><img src={iconx}  className='multi-player-mark'/></button>
            <button className='mid-btn-multi'><img src={icono}  className='multi-player-mark'/></button>
            <button className='mid-btn-multi'><img src={iconx}  className='multi-player-mark'/></button>
        </div>
        <div className='middle-3-multi'>
            <button className='mid-btn-multi'><img src='' className='multi-player-mark'/></button>
            <button className='mid-btn-multi'><img src={icono}  className='multi-player-mark'/></button>
            <button className='mid-btn-multi'><img src={iconx}  className='multi-player-mark'/></button>
        </div>
        <div className='bottom-multi'>
            <button className='mid-btn-11-multi'><span className='inside-btn-multi'><p className='text-1-multi'>X (P2)</p><p className='text-2-multi'>11</p></span></button>
            <button className='mid-btn-12-multi'><span className='inside-btn-multi'><p className='text-1-multi'>TIES</p><p className='text-2-multi'>32</p></span></button>
            <button className='mid-btn-13-multi' onClick={()=> navigate('/playerWon')}><span className='inside-btn-multi'><p className='text-1-multi'>O (P1)</p><p className='text-2-multi'>14</p></span></button>
        </div>
        </div>
    </div>
  )
}
