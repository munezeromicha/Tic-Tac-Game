import React from "react"; 
import './restartPopup.css';
import { useNavigate } from 'react-router-dom';
interface PopupProps {
  onClose: () => void; // Function to close the popup
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
    const navigate = useNavigate();
  return (
    <div className="popup-overlay-start" onClick={onClose}>
      <div className="popup-content-start" onClick={(e) => e.stopPropagation()}>
        <div className="inside-pop-start">
        <p id="text-popup-start">RESTART A GAME?</p>
        <div className="button-container-start">
          <button className="popup-button-quit-start" onClick={onClose}>NO, CANCEL</button>
          <button className="popup-button-round-start" onClick={()=>navigate('/restart')}>YES, RESTART</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
