import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';
import ArtistHeader2 from '../../../components/ArtistHeader2';
import './ArtistProfile.css';
import profile from '../../../assets/img/IllitHomeimg/artistimg/wonhee.png';
import official from '../../../assets/img/IllitHomeimg/artistimg/official-badge.png';
import './ArtistProfile.css'

const ArtistProfile = () => {
  const location = useLocation();

  const getIndex = () => {
    if (location.pathname.includes('ArtistB')) return 1;
    return 0; // 기본 홈
  };

  return (
    <div className='ArtistProfile'>
      <div className="ArtistHeader">
        <ArtistHeader2/>
      </div>
      <div className="top-profile">
        <div className="profile-img"><img src={profile} alt="" /></div>
        <p className="birth">2007.06.26</p>
        <p className="nickname">햄보르기니 <img src={official} alt="" style={{width:16}}/></p>
        <p className="smalltext">안녕하세요 워니입니다. 잘부탁드려요</p>
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
