import React from "react"; 
import './Popup.css';
import { useNavigate } from 'react-router-dom';
interface PopupProps {
  onClose: () => void; // Function to close the popup
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
    const navigate = useNavigate();
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="inside-pop">
        <p id="text-popup">RESTART A GAME?</p>
        <div className="button-container">
          <button className="popup-button-quit" onClick={onClose}>NO, CANCEL</button>
          <button className="popup-button-round" onClick={()=>navigate('/restart')}>YES, RESTART</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
