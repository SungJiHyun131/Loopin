import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';
import ArtistHeader2 from '../../../components/ArtistHeader2';
import './ArtistProfile.css';

const ArtistProfile = () => {
  const location = useLocation();

  const getIndex = () => {
    if (location.pathname.includes('ArtistB')) return 1;
    return 0; // 기본 홈
  };

  return (
    <div>
      <div className="ArtistHeader">
        <ArtistHeader2/>
      </div>
        <div className="toggle-container">
            <div className="toggle-bg" style={{   left: getIndex() === 1 ? `calc(50%)` : undefined,
        right: getIndex() === 0 ? `calc(0%-1px)` : undefined,}} />
            <Link to="ArtistA" className="toggle-btn">포스트</Link>
            <Link to="ArtistB" className="toggle-btn">댓글</Link>
          </div>
          <div className="container Artist"><Outlet /></div>
        
    </div>
  )
}


export default ArtistProfile
