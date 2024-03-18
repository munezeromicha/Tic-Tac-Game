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
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="inside-pop">
            <p className="p-pop">YOU WON!</p>
        <p id="text-popup"><img src={iconBlue} alt="" />TAKES THE ROUND</p>
        <div className="button-container">
          <button className="popup-button-quit" onClick={onClose}>QUIT</button>
          <button className="popup-button-round" onClick={()=>navigate('/restart')}>NEXT ROUND</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SoloPopup;
