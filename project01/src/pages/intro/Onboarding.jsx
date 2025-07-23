import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import letter from '../../assets/img/letter.gif'

const slides = [
  {
    id: 1,
    title: '타임캡슐 열기 완료 💨',
    desc: '아티스트별 테마 컬러 자동 적용  \n 이제 덕질도 퍼스널라이징 할 때!',
  },
  {
    id: 2,
    title: '편지는 마음을 닮아 ✧₊˚',
    desc: '팬레터, 비밀레터, 스탠딩보드까지\n 너만의 방식으로 마음을 전해봐!',
  }
];

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(prev => prev + 1);
    } else {
      navigate('/Login');
    }
  };

  return (
    <div className={`onboarding-container ${current === 0 ? 'bg1' : 'bg2'}`}>
      <h2 className="onboarding-title">{slides[current].title}</h2>
      <p className="onboarding-desc">{slides[current].desc}</p>
      {current === 1 && (
      <img src={letter} alt="스페셜 이미지" className="onboarding-letter" />
    )}
      <button className="onboarding-btn" onClick={nextSlide}>
        {current === slides.length - 1 ? '다음' : '다음'}
      </button>
    </div>
  );
};

export default Onboarding;
