import React from 'react';
import './ChatbotModal.css';
import {Link, useLocation, Route} from 'react-router-dom';
import close from '../assets/img/header_close.png';
import talk from '../assets/img/chatbot-talkicon.png';
import ask from '../assets/img/chatbot-ask.png';
import profile from '../../public/loopin.svg'
const ChatbotModal = ({ onClose }) => {
  const location = useLocation();
  return (
    <div className="chatbot-modal-overlay" onClick={onClose}>
      <div className="chatbot-modal" onClick={(e) => e.stopPropagation()}>

        <div className="chatbot-header">

          <div className="chatbot-profile">
            <p className="profileImg"></p>
            <div className="rightText">
            <p className="img"><img src={profile} alt="" /></p>
              <p className="name">Loopin</p>
              <span>운영시간 보기</span>
            </div>
          </div>

          <button onClick={onClose}><img src={close} alt="" /></button>
        </div>


        <div className="chatbot-body">
          <div className="chatbot-conBox">
            <div className="profile">
              <p className="img"><img src={profile} alt="" /></p>
              <div className="profile-name">
                <p className='name'>LOOPIN</p>
                <p className='intro'>안녕하세요 <br/>LOOPIN입니다 💙</p>
              </div>
            </div>
            <button className="askbtn"><Link to='/ChatbotView'>문의하기<img src={ask} alt="" /></Link></button>
            <p className="smallText">몇 분 내 답변 받으실 수 있어요</p>
          </div>
          <p className="using"><img src={talk} alt="" style={{ width:"15px"}}/>채널톡 이용중</p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal