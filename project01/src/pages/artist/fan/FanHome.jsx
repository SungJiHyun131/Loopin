import React from 'react'
import {Link, useLocation, Route, Outlet} from 'react-router-dom'
import FanHeader from '../../../components/FanHeader';
import './FanHome.css'


const FanHome = () => {
       const location = useLocation();
      
        const getIndex = () => {
          if (location.pathname.includes('FanPostWrite')) return 1;
          return 0; // 기본 홈
        };
  return (
    <div>
      <div className="fantop">
        <div className="FanHeader">
        <FanHeader/>
      </div>
      <div className="toggle-container">
           <div className="toggle-bg" style={{   left: getIndex() === 0 ? '0%' : '50%',
       right: getIndex() === 0 ? `calc(0%-1px)` : undefined,}} />
           <Link to="FanPostDetail" className="toggle-btn">팬레터</Link>
           <Link to="FanPostWrite" className="toggle-btn">비밀레터</Link>
         </div>
         </div>
         <Outlet/>
    </div>
  )
}

export default FanHome
