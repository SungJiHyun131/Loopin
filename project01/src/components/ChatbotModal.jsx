import React from 'react';
import './ChatbotModal.css';
import {Link, useLocation, Route} from 'react-router-dom';
import close from '../assets/img/header_close.png';

const ChatbotModal = ({ onClose }) => {
  const location =useLocation();
  return (
    <div className="chatbot-modal-overlay" onClick={onClose}>
      <div className="chatbot-modal" onClick={(e) => e.stopPropagation()}>

        <div className="chatbot-header">

          <div className="chatbot-profile">
            <p className="profileImg"></p>
            <div className="rightText">
              <p className="name">Loopin</p>
              <span>운영시간 보기</span>
            </div>
          </div>

          <button onClick={onClose}><img src={close} alt="" /></button>
        </div>


        <div className="chatbot-body">
          <div className="chatbot-conBox">
            <p className="profileImg"></p>
            <p>안녕하세요 LOOPIN입니다 💙</p>
            <button className="askbtn"><Link to='/ChatbotView'>문의하기<img src="" alt="" /></Link></button>
            <p className="smallText">몇 분 내 답변 받으실 수 있어요</p>
          </div>
          <p className="using"><img src="" alt="" />채널톡 이용중</p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal