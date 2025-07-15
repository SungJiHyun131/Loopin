import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import MyArchiveHeader from '../../components/MyArchiveHeader'
import './MyArchive.css';


const MyArchive = () => {
  const location = useLocation();

  const getIndex = () => {
    if (location.pathname.includes('ArchiveA')) return 0;
    if (location.pathname.includes('ArchiveB')) return 1;
    if (location.pathname.includes('ArchiveC')) return 2;
    if (location.pathname.includes('ArchiveD')) return 3;
    return 0; // 기본값
  };
  
  
  return (
    <div className='bgArchive'>
    <div className="MyArchiveHeader">
        <MyArchiveHeader/>
      </div>

    <div className="toggle-container">
    <div
    className="toggle-bg"
    style={{ left: `${getIndex() * 25}%` }}
  />
    <Link to="ArchiveA" className="toggle-btn">좋아요</Link>
    <Link to="ArchiveB" className="toggle-btn">북마크</Link>
    <Link to="ArchiveC" className="toggle-btn">댓글</Link>
    <Link to="ArchiveD" className="toggle-btn">나의 글</Link>

  </div>
  <div className="container archive">
  <Outlet />
  </div>
  </div>

  );
};

export default MyArchive;