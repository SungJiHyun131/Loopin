import React, { useEffect, useState } from 'react'
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom'
import FanHeader from '../../../components/FanHeader';
import './FanHome.css'
import btnmore from '../../../assets/img/IllitHomeimg/postimg/btn.png'

import fan from '../../../assets/img/IllitHomeimg/postimg/fan.png';
import secret from '../../../assets/img/IllitHomeimg/postimg/secret.png';
import X from '../../../assets/img/IllitHomeimg/postimg/X.png';
import fanbg from '../../../assets/img/IllitHomeimg/mediaimg/bgheader-media.png';
import fansearch from '../../../assets/img/Fanimg/fansearch.png';
import fanletter from '../../../assets/img/IllitHomeimg/mediaimg/bg-media.png';

const FanHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (location.state?.showToast) {
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
        // 상태 초기화: 현재 경로로 replace하면서 state 빈 객체로 변경
        navigate(location.pathname, { replace: true, state: {} });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [location.state, location.pathname, navigate]);

  const getIndex = () => {
    if (location.pathname.includes('FanPostWrite')) return 1;
    return 0;
  };

  return (
    <div className='fanContainer'>
       <div className={`fan-toast ${showToast ? 'show' : ''}`}>
        📩 임시 저장 완료!
      </div>
      <div className="fanletter"><img src={fanletter} alt="" /></div>
      <div className="fanbg"><img src={fanbg} alt="" /></div>
      <div className="fantop">   
        <div className="FanHeader">
          <FanHeader />
        </div>
        <div className="togglesearch">
          <div className="fansearcha"><img src={fansearch} alt="" /></div>
          <div className="toggle-container">
          <div className="toggle-bg" style={{   left: getIndex() === 1 ? `calc(50%)` : undefined,
  right: getIndex() === 0 ? `calc(0%-1px)` : undefined,}} />
            <Link to="FanPostDetail" className="toggle-btn A">팬레터</Link>
            <Link to="FanPostWrite" className="toggle-btn B">비밀레터</Link>
          </div>
          <div className="fansearch"><img src={fansearch} alt="" /></div>
        </div>
      </div>
      
      <Outlet />

      <p className="btnmore" onClick={() => setIsMenuOpen(true)}>
        <img src={btnmore} alt="more button" />
      </p>

      {isMenuOpen && (
        <div className="floating-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="floating-content" onClick={(e) => e.stopPropagation()}>
            <Link to="/FanLetter" onClick={() => setIsMenuOpen(false)}>
              팬 레터 <img src={fan} alt="" />
            </Link>

            <Link to="/SecretLetter" onClick={() => setIsMenuOpen(false)}>
              비밀 레터 <img src={secret} alt="" />
            </Link>
            <button onClick={() => setIsMenuOpen(false)}>
              <img src={X} alt="닫기" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FanHome