import React from 'react'
import './ChatbotButton.css'
import botIcon from '../assets/img/chatbot-icon.png';
const ChatbotButton = ({ onClick }) => {
    return (
      <button className="chatbot-button" onClick={onClick}>
        <img src={botIcon} alt="Chatbot" />
      </button>
    );
  };
  

export default ChatbotButton