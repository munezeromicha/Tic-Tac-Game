import './GameActive.css'
import logo from '../assets/logo.svg'
import iconx from '../assets/icon-x.png'
import restart from '../assets/icon-restart.svg';
import iconxout from '../assets/icon-x-outline.svg'
import icono from '../assets/icon-o.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Popup from "./restartPopup/restartPopup";
import grayX from '../assets/gray-X.png';


export const GameActive: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
      };

    const navigate = useNavigate();
  return (
    <div className='container-1-active'>
        <div className='top-2-active'>
            <img src={logo} alt="logo" className='logo-2-active'/>
            <button className='btn-1-active' onClick={()=>navigate('/return')}><img src={grayX} alt="" className='img-2-active'/><h3>TURN</h3></button>
            <button className='btn-2-active' onClick={togglePopup}><img src={restart} alt="" /></button>
            {showPopup && <Popup onClose={togglePopup} />}{" "}
        </div>
        <div className='player-button-active'>
        <div className='middle-active'>
            <button className='mid-btn-active'><img src={iconxout} className='player-mark-active'/></button>
            <button className='mid-btn-active' ><img src={iconx} className='player-mark-active'/></button>
            <button className='mid-btn-active'><img src={icono} className='player-mark-active'/></button>
        </div>
        <div className='middle-2-active'>
            <button className='mid-btn-active'><img src={iconx} className='player-mark-active'/></button>
            <button className='mid-btn-active'><img src={icono} className='player-mark-active'/></button>
            <button className='mid-btn-active'><img src={iconx} className='player-mark-active'/></button>
        </div>
        <div className='middle-3-active'>
            <button className='mid-btn-active'><img src=''className='player-mark-active'/></button>
            <button className='mid-btn-active'><img src={icono} className='player-mark-active'/></button>
            <button className='mid-btn-active'><img src={iconx} className='player-mark-active'/></button>
        </div>
        <div className='bottom-active'>
            <button className='mid-btn-11-active'  onClick={()=>navigate('/solo')}><span className='inside-btn-active'><p className='text-1-active'>X (YOU)</p><p className='text-2-active'>14</p></span></button>
            <button className='mid-btn-12-active'><span className='inside-btn-active'><p className='text-1-active'>TIES</p><p className='text-2-active'>32</p></span></button>
            <button className='mid-btn-13-active'><span className='inside-btn-active'><p className='text-1-active'>O (CPU)</p><p className='text-2-active'>11</p></span></button>
            
        </div>
        </div>

    </div>
  )
}
