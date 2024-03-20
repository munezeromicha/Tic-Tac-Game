import './SoloWon.css'
import SoloPopup from './soloPopup/soloPopup'
import logo from '../assets/logo.svg'
import iconx from '../assets/icon-x.png'
import iconxout from '../assets/icon-x.svg'
import restart from '../assets/icon-restart.svg';
import icono from '../assets/icon-o.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import grayX from '../assets/gray-X.png';

export const SoloWon: React.FC = () => {

    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
      };

    const navigate = useNavigate();
  return (
    <div className='container-solo'>
        <div className='top-solo'>
            <img src={logo} alt="logo" className='logo-solo'/>
            <button className='btn-1-solo' onClick={()=>navigate('/return')}><img src={grayX} alt="" className='img-2-solo'/><h3>TURN</h3></button>
            <button className='btn-2-solo' onClick={()=>navigate('/restart')}><img src={restart} alt="" /></button>
        </div>
        <div className='player-solo-btn'>
        <div className='middle-solo'>
            <button className='mid-btn-1-solo'><img src={iconxout} className='solo-mark-won'/></button>
            <button className='mid-btn-1-solo' ><img src={iconxout} className='solo-mark-won'/></button>
            <button className='mid-btn-1-solo'><img src={iconxout} className='solo-mark-won'/></button>
        </div>
        <div className='middle-2-solo'>
            <button className='mid-btn-solo'><img src={iconx} className='solo-mark-won'/></button>
            <button className='mid-btn-solo'><img src={icono} className='solo-mark-won'/></button>
            <button className='mid-btn-solo'><img src={iconx} className='solo-mark-won'/></button>
        </div>
        <div className='middle-3-solo'>
            <button className='mid-btn-solo'><img src=''className='solo-mark-won'/></button>
            <button className='mid-btn-solo'><img src={icono} className='solo-mark-won'/></button>
            <button className='mid-btn-solo'><img src={iconx} className='solo-mark-won'/></button>
        </div>
        <div className='bottom-solo'>
            <button className='mid-btn-11-solo' onClick={togglePopup}><span className='inside-btn-solo'><p className='text-1-solo'>X (YOU)</p><p className='text-2-solo'>14</p></span></button>
            {showPopup && <SoloPopup onClose={togglePopup} />}{" "}
            <button className='mid-btn-12-solo' ><span className='inside-btn-solo'><p className='text-1-solo'>TIES</p><p className='text-2-solo'>32</p></span></button>
            <button className='mid-btn-13-solo'><span className='inside-btn-solo'><p className='text-1-solo'>O (CPU)</p><p className='text-2-solo'>11</p></span></button>
        </div>
        </div>
    </div>
  )
}
