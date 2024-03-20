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

      <div className="centered-content-player">
        <p className="p-pop-player">PLAYER 1 WINS!</p>
        <p id="text-player"><img src={iconO} alt=""  className="iconx-won-player"/>TAKES THE ROUND</p>
        <div className="button-container-player">
          <button className="popup-button-quit-player" onClick={onClose}>QUIT</button>
          <button className="popup-button-round-player" onClick={()=>navigate('/restart')}>NEXT ROUND</button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default PlayersPopup;
