import React, {useState} from 'react';
import './ChatbotModal.css';
import chaticon from '../../Image/health.png';
import Chatbot from './Chatbot'; // Import the Chatbot component

const ChatbotModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-modal">
      <img
        src={chaticon}
        alt="Chatbot Icon"
        className="chatbot-icon"
        onClick={toggleChatbot}
      />
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-popup-content">
            <button className="close-btn" onClick={toggleChatbot}>
              &times;
            </button>
            <Chatbot /> {/* Render the Chatbot component here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotModal;
