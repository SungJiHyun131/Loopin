import React, { useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import FanHeader from '../../../components/FanHeader';
import './FanHome.css'
import btnmore from '../../../assets/img/IllitHomeimg/postimg/btn.png'

import fan from '../../../assets/img/IllitHomeimg/postimg/fan.png';
import secret from '../../../assets/img/IllitHomeimg/postimg/secret.png';
import X from '../../../assets/img/IllitHomeimg/postimg/X.png';
import fanbg from '../../../assets/img/Fanimg/FANBG.png';
import fansearch from '../../../assets/img/Fanimg/fansearch.png';
import fanletter from '../../../assets/img/Fanimg/fanletter.png';



const FanHome = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getIndex = () => {
    if (location.pathname.includes('FanPostWrite')) return 1;
    return 0;
  };

  return (
    <div className='fanContainer'>
      <div className="fanletter"><img src={fanletter} alt="" /></div>
      <div className="fanbg"><img src={fanbg} alt="" /></div>
      <div className="fantop">   
        <div className="FanHeader">
          <FanHeader />
        </div>
        <div className="togglesearch">
        <div className="fansearcha"><img src={fansearch} alt="" /></div>
        <div className="toggle-container">
          <div
            className="toggle-bg"
            style={{
              left: getIndex() === 0 ? '0%' : '50%',
              right: getIndex() === 0 ? `calc(0%-1px)` : undefined,
            }}
          />
          <Link to="FanPostDetail" className="toggle-btn">팬레터</Link>
          <Link to="FanPostWrite" className="toggle-btn">비밀레터</Link>
          
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
