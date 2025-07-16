import React from 'react'
import './ChatbotView.css'
import close from '../assets/img/header_close.png';
import back from '../assets/img/header_back.png';
import { useNavigate } from 'react-router-dom';   
const ChatbotView = () => {
    const navigate = useNavigate();
    return (
        <div className="chatbot-body">
            <div className="chatbot-header">
            <button className="back-button" onClick={()=> navigate('/ChatbotModal')}><img src={back} alt="" /></button>
                <div className="chatbot-profile">
                    <p className="profileImg"></p>
                    <div className="rightText">
                        <p className="name">Loopin</p>
                        <span>몇분 내 답변 받으실 수 있어요</span>
                        </div>
                    </div>
                    <p className="close-button" onClick={()=> navigate('/MainHome')}><a href=""><img src={close} alt="" /></a></p> 
                    </div>

          <p className="chatbot-guide">설레는 마음이 흐르는 공간,<br/>LOOPIN의 그 순간을 함께합니다 ✨</p>
          <div className="chatbot-conBox">
            <p className="profileImg"></p>
            <p>안녕하세요 LOOPIN입니다 💙</p>
    
            <div className="btn-wrap">
              <button>✨ New</button>
              <button>멤버십 혜택 안내</button>
              <button>고객센터 운영 시간 ⏰</button>
              <button>주문(전) 문의</button>
              <button>주문(후) 문의</button>
            </div>
          </div>
        </div>
      );
    };

export default ChatbotView