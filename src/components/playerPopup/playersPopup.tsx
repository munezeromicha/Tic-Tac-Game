import React from "react"; 
import iconO from '../../assets/O-ico-blue.png'
import './playersPopup.css';
import { useNavigate } from 'react-router-dom';
interface PopupProps {
  onClose: () => void; // Function to close the popup
}

const PlayersPopup: React.FC<PopupProps> = ({ onClose }) => {
    const navigate = useNavigate();
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="inside-pop">
            <p className="p-pop">PLAYER 1 WINS!</p>
        <p id="text-popup"><img src={iconO} alt="" />TAKES THE ROUND</p>
        <div className="button-container">
          <button className="popup-button-quit" onClick={onClose}>QUIT</button>
          <button className="popup-button-round" onClick={()=>navigate('/restart')}>NEXT ROUND</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersPopup;
