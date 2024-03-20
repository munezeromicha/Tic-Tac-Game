import './PlayerWon.css'
import logo from '../assets/logo.svg'
import icontopx from '../assets/gray-X.png'
import iconx from '../assets/icon-x.png'
import restart from '../assets/icon-restart.svg';
import Yellowicon from '../assets/blue-i-o.svg'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayersPopup from './playerPopup/playersPopup';

export const PlayerWon: React.FC = () => {

    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
      };


    const navigate = useNavigate();
  return (
    <div className='container-won'>
        <div className='top-won'>
            <img src={logo} alt="logo" className='logo-won'/>
            <button className='btn-1-won' onClick={()=>navigate('/return')}><img src={icontopx} alt="" className='img-2-won'/><h3>TURN</h3></button>
            <button className='btn-2-won' onClick={()=> navigate('/restart')}><img src={restart} alt="" /></button>
    
        </div>
        <div className='middle-won'>
            <button className='mid-btn-won'><img src=''  className='player-won'/></button>
            <button className='mid-btn-won' ><img src={iconx}  className='player-won'/></button>
            <button className='Yellow-back-won'><img src={Yellowicon}  className='player-won'/></button>
        </div>
        <div className='middle-2-won'>
            <button className='mid-btn-won'><img src={iconx}  className='player-won'/></button>
            <button className='Yellow-back-won'><img src={Yellowicon}  className='player-won'/></button>
            <button className='mid-btn-won'><img src={iconx}  className='player-won'/></button>
        </div>
        <div className='middle-3-won'>
            <button className='Yellow-back-won'><img src={Yellowicon} className='player-won'/></button>
            <button className='mid-btn-won'><img src={Yellowicon}  className='player-won'/></button>
            <button className='mid-btn-won'><img src={iconx}  className='player-won'/></button>
        </div>
        <div className='bottom-won'>
            <button className='mid-btn-11-won'><span className='inside-btn-won'><p className='text-1-won'>X (YOU)</p><p className='text-2-won'>11</p></span></button>
            <button className='mid-btn-12-won'><span className='inside-btn-won'><p className='text-1-won'>TIES</p><p className='text-2-won'>32</p></span></button>
            <button className='mid-btn-13-won' onClick={togglePopup}><span className='inside-btn-won'><p className='text-1-won'>O (P1)</p><p className='text-2-won'>14</p></span></button>
            {showPopup && <PlayersPopup onClose={togglePopup} />}{" "}
        </div>
    </div>


  )
}
