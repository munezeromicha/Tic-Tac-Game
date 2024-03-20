import React from "react"; 
import iconBlue from '../../assets/icon-x.png'
import './soloPopup.css';
import { useNavigate } from 'react-router-dom';
interface PopupProps {
  onClose: () => void; // Function to close the popup
}

const SoloPopup: React.FC<PopupProps> = ({ onClose }) => {
    const navigate = useNavigate();
  return (
    <div className="popup-overlay-solo" onClick={onClose}>
      <div className="popup-content-solo" onClick={(e) => e.stopPropagation()}>

        <div className="centered-content">
        <p className="p-pop-solo">YOU WON!</p>
        <p id="text-solo"><img src={iconBlue} alt=""  className="iconx-won"/>TAKES THE ROUND</p>
        <div className="button-container-solo">
          <button className="popup-button-quit-solo" onClick={onClose}>QUIT</button>
          <button className="popup-button-round-solo" onClick={()=>navigate('/restart')}>NEXT ROUND</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SoloPopup;
