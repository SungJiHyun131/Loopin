import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import MediaHeader from '../../../components/MediaHeader';
import './Media.css';


const MediaHome = () => {
  const location = useLocation();

  const getIndex = () => {
    if (location.pathname.includes('MediaB')) return 1;
    return 0; // 기본 홈
  };
  return (
    <div>
      <div className="MediaHeader">
        <MediaHeader/>
      </div>
      <div className="toggle-container">
      <div className="toggle-bg" style={{   left: getIndex() === 1 ? `calc(50% + 1px)` : undefined,
  right: getIndex() === 0 ? `calc(0% - 1px)` : undefined,}} />
      <Link to="MediaA" className="toggle-btn">홈</Link>
      <Link to="MediaB" className="toggle-btn">전체</Link>
     
    </div>
    <Outlet />
    </div>
  );
};

export default MediaHome;
