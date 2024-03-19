import './GameActive.css'
import logo from '../assets/logo.svg'
import iconx from '../assets/icon-x.png'
import restart from '../assets/icon-restart.svg';
import iconxout from '../assets/icon-x-outline.svg'
import icono from '../assets/icon-o.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Popup from "./restartPopup/restartPopup";


export const GameActive: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
      };

    const navigate = useNavigate();
  return (
    <div className='container-1'>
        <div className='top'>
            <img src={logo} alt="logo" className='logo'/>
            <div>
            <button className='btn-1' onClick={()=>navigate('/return')}><img src={iconx} alt="" className='img-2'/><h3>TURN</h3></button>
            </div>
            <div>
            <button className='btn-2' onClick={togglePopup}><img src={restart} alt="" /></button>
            {showPopup && <Popup onClose={togglePopup} />}{" "}
            </div>
        </div>
        <div className='middle'>
            <button className='mid-btn'><img src={iconxout} /></button>
            <button className='mid-btn' ><img src={iconx} /></button>
            <button className='mid-btn'><img src={icono} /></button>
        </div>
        <div className='middle-2'>
            <button className='mid-btn'><img src={iconx} /></button>
            <button className='mid-btn'><img src={icono} /></button>
            <button className='mid-btn'><img src={iconx} /></button>
        </div>
        <div className='middle-3'>
            <button className='mid-btn'><img src=''/></button>
            <button className='mid-btn'><img src={icono} /></button>
            <button className='mid-btn'><img src={iconx} /></button>
        </div>
        <div className='bottom'>
            <button className='mid-btn-11'><span className='inside-btn' onClick={()=>navigate('/solo')}><p className='text-1'>X (YOU)</p><p className='text-2'>14</p></span></button>
            <button className='mid-btn-12'><span className='inside-btn'><p className='text-1'>TIES</p><p className='text-2'>32</p></span></button>
            <button className='mid-btn-13'><span className='inside-btn'><p className='text-1'>O (CPU)</p><p className='text-2'>11</p></span></button>
            
        </div>

    </div>
  )
}
